import {
    Cmd,
    ListCmd,
    loop,
    Loop,
    LoopReducer,
    RunCmd
    } from 'redux-loop';
import { PriceFetchAction } from '../actions';
import {
    FaildOnFetch,
    LoadFetchedDates,
    LoadFetchedLastListDate,
    LoadFetchedLists,
    LoadFetchedPrices
    } from '../actions/listPrices';
import * as constants from '../constants/listPrices';
import { IPricesState } from '../types/index';
import {
    fetchAllLists,
    fetchAllLoadedDates,
    fetchLastListDate,
    fetchLastLists
    } from '../api';

const initialState: IPricesState = {
    allListOptions: [],
    datesLoaded: [], 
    error: null,
    loaded: false,
    loading: false,
    prices: [],
    searchText: "",
    selectOptions: [],
    selectedDate: { fecha: "" },
    selectedList: "",
}

const loadPrices: (date: string) => RunCmd<PriceFetchAction> =
    (date: string) => Cmd.run(fetchLastLists, {
        args: [date],
        failActionCreator: FaildOnFetch,
        successActionCreator: LoadFetchedPrices,

    });

const loadLists: () => RunCmd<PriceFetchAction> =
    () => Cmd.run(fetchAllLists, {
        failActionCreator: FaildOnFetch,
        successActionCreator: LoadFetchedLists,
    });

const loadDates: () => RunCmd<PriceFetchAction> =
    () => Cmd.run(fetchAllLoadedDates, {
        failActionCreator: FaildOnFetch,
        successActionCreator: LoadFetchedDates,
    });

const loadLastListDate: () => RunCmd<PriceFetchAction> =
    () => Cmd.run(fetchLastListDate, {
        failActionCreator: FaildOnFetch,
        successActionCreator: LoadFetchedLastListDate,
    });

const loadListByDate: (date: string) => ListCmd<PriceFetchAction> =
    (date: string) => Cmd.list([loadPrices(date), loadLists(), loadDates()], {
        batch: true
    });

export const prices: LoopReducer<IPricesState, PriceFetchAction> =
    (state: IPricesState = initialState, action: PriceFetchAction): IPricesState | Loop<IPricesState, PriceFetchAction> => {
        switch (action.type) {
            case constants.INIT_FECTCH:
                return loop(
                    { ...state, 
                        error: null, 
                        loading: true },
                    loadLastListDate());
            case constants.SUCCESSFUL_PRICE_LIST_FETCH:
                return {
                    ...state,
                    loaded: true,
                    loading: false,
                    prices: action.data,
                };
            case constants.CLEAR_LOADED_STATE:
                return initialState;
            case constants.SUCCESSFUL_LIST_NAME_FETCH:
                return {
                    ...state,
                    allListOptions: action.data,
                    loading: false,
                    selectOptions: action.data
                        .filter(lists => lists.fecha === state.selectedDate.fecha)
                        .map(row => row.lista),
                };
            case constants.SUCCESSFUL_LAST_DATE_FETCH:
                return loop({
                    ...state,
                    selectedDate: { fecha: action.data },
                }, loadListByDate(action.data));
            case constants.SUCCESSFUL_DATES_FETCH:
                return {
                    ...state,
                    datesLoaded: action.data,
                };
            case constants.FAILED_FETCH:
                return { ...state, error: action.error, loading: false };
            case constants.UPDATE_SEARCH_TEXT:
                return {
                    ...state,
                    searchText: action.value
                };
            case constants.UPDATE_SELECTED_LIST:
                return {
                    ...state,
                    selectedList: action.value
                };
            case constants.UPDATE_SELECTED_DATE:
                return loop({
                    ...state,
                    loading: true,
                    selectOptions: state.allListOptions
                        .filter(lists => lists.fecha === action.value.fecha)
                        .map(row => row.lista),
                    selectedDate: action.value,
                    selectedList: "",
                }, loadPrices(action.value.fecha))
        }
        return state;
    }
