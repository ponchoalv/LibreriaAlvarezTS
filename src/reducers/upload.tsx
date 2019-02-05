import { fetchLastListDate, fetchAllLists, fetchAllLoadedDates, cargarLista } from "../api";
import { LoadFetchedLastListDate, FaildOnFetch, LoadFetchedLists, LoadFetchedDates, UploadListAction, SuccessfulLoadedList } from "src/actions/uploadActions";
import { ManageUploadState } from '../types/index';
import { LoopReducer, Cmd, loop, Loop, RunCmd } from 'redux-loop';
import * as constants from '../constants/manageLists';

const initialState: ManageUploadState = {
    allLoadedLists: [],
    filteredLists: [],
    selectedDate: { fecha: ""},
    listsDateOptions: [],
    error: undefined,
    loading: true
}

const loadLastListDate: () => RunCmd<UploadListAction> =
    () => Cmd.run(fetchLastListDate, {
        successActionCreator: LoadFetchedLastListDate,
        failActionCreator: FaildOnFetch
    });

const loadAllListNames: () => RunCmd<UploadListAction> =
    () => Cmd.run(fetchAllLists, {
        successActionCreator: LoadFetchedLists,
        failActionCreator: FaildOnFetch
    });

const loadAllDatesOptions: () => RunCmd<UploadListAction> =
    () => Cmd.run(fetchAllLoadedDates,{
        successActionCreator: LoadFetchedDates,
        failActionCreator: FaildOnFetch
    });

export const upload: LoopReducer<ManageUploadState, UploadListAction> =
    (state: ManageUploadState = initialState, action: UploadListAction): ManageUploadState | Loop<ManageUploadState, UploadListAction> => {
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
                    selectedDate: action.value,
                    filteredLists: state.allLoadedLists
                        .filter(lists => lists.fecha === action.value.fecha)
                }, Cmd.none)
            case constants.INIT_LIST_UPLOAD:
                return loop({
                    ...state,
                    loading: true,
                }, Cmd.run(cargarLista, {
                    successActionCreator: SuccessfulLoadedList,
                    failActionCreator: FaildOnFetch,
                    args: [action.data]
                }))
            case constants.LIST_UPLOAD_SUCCESSFUL:
                return loop({
                    ...state,
                    loading: false,
                }, loadAllListNames())
        }
        return state;
    }
