import * as constants from "src/constants/listPrices";
import { PriceRow, DateOfList, LoadedList } from "src/types";

// List of prices events
export interface InitPriceFetch {
    type: constants.INIT_FECTCH;
}

export interface SuccessfulPriceFetched {
    type: constants.SUCCESSFUL_PRICE_LIST_FETCH;
    data: Array<PriceRow>;
}

export interface FailOnFetch {
    type: constants.FAILED_FETCH;
    error: Error;
}

export interface UpdateSearchText {
    type: constants.UPDATE_SEARCH_TEXT;
    value: string;
}

export interface SuccessfulListsFectched {
    type: constants.SUCCESSFUL_LIST_NAME_FETCH;
    data: Array<LoadedList>;
}

export interface UpdateSelectedList {
    type: constants.UPDATE_SELECTED_LIST;
    value: string;
}

export interface UpdateSelectedDate {
    type: constants.UPDATE_SELECTED_DATE;
    value: DateOfList;
}

export interface SuccessfulDatesFetched {
    type: constants.SUCCESSFUL_DATES_FETCH;
    data: Array<DateOfList>;
}

export interface SuccessfulLastListDateFetched {
    type: constants.SUCCESSFUL_LAST_DATE_FETCH;
    data: string;
}

export type PriceFetchAction = 
    | InitPriceFetch 
    | SuccessfulPriceFetched 
    | FailOnFetch 
    | UpdateSearchText 
    | SuccessfulListsFectched
    | UpdateSelectedList
    | SuccessfulDatesFetched
    | SuccessfulLastListDateFetched
    | UpdateSelectedDate;


export function FetchPrices(): PriceFetchAction {
    return {
        type: constants.INIT_FECTCH
    }
}

export function LoadFetchedPrices(data: Array<PriceRow>): PriceFetchAction {
    return {
        type: constants.SUCCESSFUL_PRICE_LIST_FETCH,
        data,
    }
}

export function FaildOnFetch(error: Error): PriceFetchAction {
    return {
        type: constants.FAILED_FETCH,
        error,
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

export function UpdateSelectedDate(value: DateOfList) : PriceFetchAction {
    return {
        type: constants.UPDATE_SELECTED_DATE,
        value,
    }
}

export function LoadFetchedLists(data: Array<LoadedList>) : PriceFetchAction {
    return {
        type: constants.SUCCESSFUL_LIST_NAME_FETCH,
        data,
    }
}

export function LoadFetchedDates(data: Array<DateOfList>) : PriceFetchAction {
    return {
        type: constants.SUCCESSFUL_DATES_FETCH,
        data,
    }
}

export function LoadFetchedLastListDate(data:string) : PriceFetchAction {
    return {
        type: constants.SUCCESSFUL_LAST_DATE_FETCH,
        data,
    }
}