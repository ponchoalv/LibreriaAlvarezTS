import { fetchAllLists, fetchLastLists, fetchAllLoadedDates, fetchLastListDate } from "../api";
import { PriceFetchAction, LoadFetchedPrices, FaildOnFetch, LoadFetchedLists, LoadFetchedDates, LoadFetchedLastListDate } from '../actions';
import { PricesState } from '../types/index';
import { LoopReducer, Cmd, loop, Loop, RunCmd, ListCmd } from 'redux-loop';
import { INIT_FECTCH, SUCCESSFUL_PRICE_LIST_FETCH, FAILED_FETCH, UPDATE_SEARCH_TEXT, SUCCESSFUL_LIST_NAME_FETCH, UPDATE_SELECTED_LIST, SUCCESSFUL_LAST_DATE_FETCH, SUCCESSFUL_DATES_FETCH, UPDATE_SELECTED_DATE } from '../constants/index';

const initialState: PricesState = {
    prices: [],
    loading: false,
    error: undefined,
    searchText: "",
    selectedList: "",
    selectOptions: [],
    allListOptions: [],
    selectedDate: { fecha: "" },
    datesLoaded: [],
}

const loadPrices: (date: string) => RunCmd<PriceFetchAction> =
    (date: string) => Cmd.run(fetchLastLists, {
        successActionCreator: LoadFetchedPrices,
        failActionCreator: FaildOnFetch,
        args: [date]
    });

const loadLists: () => RunCmd<PriceFetchAction> =
    () => Cmd.run(fetchAllLists, {
        successActionCreator: LoadFetchedLists,
        failActionCreator: FaildOnFetch
    });

const loadDates: () => RunCmd<PriceFetchAction> =
    () => Cmd.run(fetchAllLoadedDates, {
        successActionCreator: LoadFetchedDates,
        failActionCreator: FaildOnFetch
    });

const loadLastListDate: () => RunCmd<PriceFetchAction> =
    () => Cmd.run(fetchLastListDate, {
        successActionCreator: LoadFetchedLastListDate,
        failActionCreator: FaildOnFetch
    });

const loadListByDate: (date: string) => ListCmd<PriceFetchAction> =
    (date: string) => Cmd.list([loadPrices(date), loadLists(), loadDates()], {
        batch: true
    });

export const prices: LoopReducer<PricesState, PriceFetchAction> =
    (state: PricesState = initialState, action: PriceFetchAction): PricesState | Loop<PricesState, PriceFetchAction> => {
        switch (action.type) {
            case INIT_FECTCH:
                return loop(
                    { ...state, loading: true },
                    loadLastListDate());
            case SUCCESSFUL_PRICE_LIST_FETCH:
                return {
                    ...state,
                    prices: action.data,
                    loading: false
                };
            case SUCCESSFUL_LIST_NAME_FETCH:
                return {
                    ...state,
                    allListOptions: action.data,
                    selectOptions: action.data
                        .filter(lists => lists.fecha === state.selectedDate.fecha)
                        .map(row => row.lista),
                    loading: false
                };
            case SUCCESSFUL_LAST_DATE_FETCH:
                return loop({
                    ...state,
                    selectedDate: { fecha: action.data },
                }, loadListByDate(action.data));
            case SUCCESSFUL_DATES_FETCH:
                return {
                    ...state,
                    datesLoaded: action.data,
                };
            case FAILED_FETCH:
                return { ...state, error: action.error, loading: false };
            case UPDATE_SEARCH_TEXT:
                return {
                    ...state,
                    searchText: action.value
                };
            case UPDATE_SELECTED_LIST:
                return {
                    ...state,
                    selectedList: action.value
                };
            case UPDATE_SELECTED_DATE:
                return loop({
                    ...state,
                    selectedDate: action.value,
                    selectedList: "",
                    selectOptions: state.allListOptions
                        .filter(lists => lists.fecha === action.value.fecha)
                        .map(row => row.lista),
                    loading: true,
                }, loadPrices(action.value.fecha))
        }
        return state;
    }
