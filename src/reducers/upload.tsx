import {
    Cmd,
    loop,
    Loop,
    LoopReducer,
    RunCmd
    } from 'redux-loop';
import {
    FaildOnFetch,
    ListDeletedSuccessfuly,
    LoadFetchedDates,
    LoadFetchedLastListDate,
    LoadFetchedLists,
    SuccessfulLoadedList,
    UploadListAction
    } from 'src/actions/uploadActions';
import {
    cargarLista,
    eliminarLista,
    fetchAllLists,
    fetchAllLoadedDates,
    fetchLastListDate
    } from '../api';
import * as constants from '../constants/manageLists';
import { IDeleteListData, IManageUploadState } from '../types/index';

const initialState: IManageUploadState = {
    addingNewDate: false,
    allLoadedLists: [],
    error: undefined,
    filteredLists: [],
    listsDateOptions: [],
    loading: true,
    selectedDate: { fecha: "" },
}

const loadLastListDate: () => RunCmd<UploadListAction> =
    () => Cmd.run(fetchLastListDate, {
        failActionCreator: FaildOnFetch,
        successActionCreator: LoadFetchedLastListDate,
    });

const loadAllListNames: () => RunCmd<UploadListAction> =
    () => Cmd.run(fetchAllLists, {
        failActionCreator: FaildOnFetch,
        successActionCreator: LoadFetchedLists,
    });

const loadAllDatesOptions: () => RunCmd<UploadListAction> =
    () => Cmd.run(fetchAllLoadedDates, {
        failActionCreator: FaildOnFetch,
        successActionCreator: LoadFetchedDates,
    });

const deleteList: (list: IDeleteListData) => RunCmd<UploadListAction> =
    (list: IDeleteListData) => Cmd.run(eliminarLista, {
        args: [list],
        failActionCreator: FaildOnFetch,
        successActionCreator: ListDeletedSuccessfuly,
    })

export const upload: LoopReducer<IManageUploadState, UploadListAction> =
    (state: IManageUploadState = initialState, action: UploadListAction): IManageUploadState | Loop<IManageUploadState, UploadListAction> => {
        switch (action.type) {
            case constants.INIT_LAST_DATE_FETCH:
                return loop(
                    {
                        ...state,
                        loading: true,
                    }, Cmd.list([loadLastListDate(), loadAllListNames(), loadAllDatesOptions()], {
                        batch: true
                    })
                )
            case constants.SUCCESSFUL_LIST_NAME_FETCH:
                return {
                    ...state,
                    allLoadedLists: action.data,
                    filteredLists: action.data
                        .filter(lists => lists.fecha === state.selectedDate.fecha),
                    loading: false
                };
            case constants.SUCCESSFUL_DATES_FETCH:
                return {
                    ...state,
                    listsDateOptions: action.data
                }
            case constants.SUCCESSFUL_LAST_DATE_FETCH:
                return loop({
                    ...state,
                    selectedDate: { fecha: action.data },
                }, Cmd.none);
            case constants.FAILED_FETCH:
                return { ...state, error: action.error, loading: false };
            case constants.UPDATE_SELECTED_DATE:
                return loop({
                    ...state,
                    filteredLists: state.allLoadedLists
                        .filter(lists => lists.fecha === action.value.fecha),
                    selectedDate: action.value,
                }, Cmd.none)
            case constants.INIT_LIST_UPLOAD:
                return loop({
                    ...state,
                    loading: true,
                }, Cmd.run(cargarLista, {
                    args: [action.data],
                    failActionCreator: FaildOnFetch,
                    successActionCreator: SuccessfulLoadedList,
                }))
            case constants.LIST_UPLOAD_SUCCESSFUL:
                return loop({
                    ...state,
                    loading: false,
                }, Cmd.list([loadAllListNames(), loadAllDatesOptions()], {
                    batch: true
                }))
            case constants.START_EDITING:
                return {
                    ...state,
                    addingNewDate: true,
                }
            case constants.STOP_EDITING:
                return loop({
                    ...state,
                    addingNewDate: false,
                }, Cmd.none)
            case constants.CLEAR_EDITING_DATE:
                return loop({
                    ...state,
                    addingNewDate: false,
                }, loadLastListDate())
            case constants.DELETE_LIST:
                return loop({
                    ...state,
                    loading: true
                }, deleteList(action.value))
            case constants.DELETE_LIST_SUCCESSFUL:
                return loop({
                    ...state,
                    loading: false
                }, Cmd.list([loadAllListNames(), loadAllDatesOptions()], {
                    batch: true
                }))
        }
        return state;
    }
