import { fetchPrices, fetchAllLists } from "../api";
import { PriceFetchAction, LoadFetchedPrices, FaildOnFetch, LoadFetchedLists } from '../actions';
import { PricesState } from '../types/index';
import { LoopReducer, Cmd, loop, Loop, RunCmd } from 'redux-loop';
import { INIT_FECTCH, SUCCESSFUL_PRICE_LIST_FETCH, FAILED_FETCH, UPDATE_SEARCH_TEXT, SUCCESSFUL_LIST_NAME_FETCH, UPDATE_SELECTED_LIST } from '../constants/index';

const initialState: PricesState = {
    prices: [],
    loading: false,
    error: undefined,
    searchText: "",
    selectedList: "",
    selectOptions: [],
    allListOptions: [],
}

const loadPrices: (date: string) => RunCmd<PriceFetchAction> =
    (date: string) => Cmd.run(fetchPrices, {
        successActionCreator: LoadFetchedPrices,
        failActionCreator: FaildOnFetch,
        args: [date],
    });

const loadLists: () => RunCmd<PriceFetchAction> =
    () => Cmd.run(fetchAllLists, {
        successActionCreator: LoadFetchedLists,
        failActionCreator: FaildOnFetch
    });

export const prices: LoopReducer<PricesState, PriceFetchAction> = (state: PricesState = initialState, action: PriceFetchAction): PricesState | Loop<PricesState, PriceFetchAction> => {
    switch (action.type) {
        case INIT_FECTCH:
            return loop(
                { ...state, loading: true },
                Cmd.list([loadPrices('2019-01-18'), loadLists()], {
                    batch: true
                }));
        case SUCCESSFUL_PRICE_LIST_FETCH:
            return { ...state, 
                prices: action.data,  
                loading: false };
        case SUCCESSFUL_LIST_NAME_FETCH:
            return {
                ...state,
                allListOptions: action.data,
                selectOptions: action.data
                    .filter(lists => lists.fecha === '2019-01-18')
                    .map(row => row.lista),
                loading: false
            };
        case FAILED_FETCH:
            return { ...state, error: action.error, loading: false };
        case UPDATE_SEARCH_TEXT:
            return { ...state, 
                        searchText: action.value };
        case UPDATE_SELECTED_LIST:
            return { ...state, 
                        selectedList: action.value };
    }
    return state;
}
