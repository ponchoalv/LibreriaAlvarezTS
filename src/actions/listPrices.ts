import * as constants from 'src/constants/listPrices';
import { IDateOfList, ILoadedList, IPriceRow } from 'src/types';

// List of prices events
export interface InitPriceFetch {
    type: constants.INIT_FECTCH;
}

export interface ISuccessfulPriceFetched {
    type: constants.SUCCESSFUL_PRICE_LIST_FETCH;
    data: IPriceRow[];
}

export interface IFailOnFetch {
    type: constants.FAILED_FETCH;
    error: Error;
}

export interface IUpdateSearchText {
    type: constants.UPDATE_SEARCH_TEXT;
    value: string;
}

export interface ISuccessfulListsFectched {
    type: constants.SUCCESSFUL_LIST_NAME_FETCH;
    data: ILoadedList[];
}

export interface IUpdateSelectedList {
    type: constants.UPDATE_SELECTED_LIST;
    value: string;
}

export interface IUpdateSelectedDate {
    type: constants.UPDATE_SELECTED_DATE;
    value: IDateOfList;
}

export interface ISuccessfulDatesFetched {
    type: constants.SUCCESSFUL_DATES_FETCH;
    data: IDateOfList[];
}

export interface ISuccessfulLastListDateFetched {
    type: constants.SUCCESSFUL_LAST_DATE_FETCH;
    data: string;
}

export interface IClearLoadedState {
    type: constants.CLEAR_LOADED_STATE;
}

export type PriceFetchAction = 
    | InitPriceFetch 
    | IClearLoadedState
    | ISuccessfulPriceFetched 
    | IFailOnFetch 
    | IUpdateSearchText 
    | ISuccessfulListsFectched
    | IUpdateSelectedList
    | ISuccessfulDatesFetched
    | ISuccessfulLastListDateFetched
    | IUpdateSelectedDate;


export function FetchPrices(): PriceFetchAction {
    return {
        type: constants.INIT_FECTCH
    }
}

export function LoadFetchedPrices(data: IPriceRow[]): PriceFetchAction {
    return {
        data,
        type: constants.SUCCESSFUL_PRICE_LIST_FETCH,
        
    }
}

export function FaildOnFetch(error: Error): PriceFetchAction {
    return {
        error,
        type: constants.FAILED_FETCH,
    }
}

export function OnSearchTextUpdate(value: string): PriceFetchAction {
    return {
        type: constants.UPDATE_SEARCH_TEXT,
        value,
    }
}

export function UpdateSelectedList(value: string) : PriceFetchAction {
    return {
        type: constants.UPDATE_SELECTED_LIST,
        value,
    }
}

export function UpdateSelectedDate(value: IDateOfList) : PriceFetchAction {
    return {
        type: constants.UPDATE_SELECTED_DATE,
        value,
    }
}

export function LoadFetchedLists(data: ILoadedList[]) : PriceFetchAction {
    return {
        data,
        type: constants.SUCCESSFUL_LIST_NAME_FETCH,
    }
}

export function LoadFetchedDates(data: IDateOfList[]) : PriceFetchAction {
    return {
        data,
        type: constants.SUCCESSFUL_DATES_FETCH,
    }
}

export function LoadFetchedLastListDate(data:string) : PriceFetchAction {
    return {
        data,
        type: constants.SUCCESSFUL_LAST_DATE_FETCH,
    }
}