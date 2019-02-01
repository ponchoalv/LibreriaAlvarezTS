import * as constants from '../constants';
import { PriceRow, LoadedList, DateOfList } from "../types";

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

export interface InitLastDateFetch {
    type: constants.INIT_LAST_DATE_FETCH;
}

export type UploadListAction = 
    | InitLastDateFetch
    | SuccessfulLastListDateFetched
    | FailOnFetch
    | UpdateSelectedDate
    | SuccessfulListsFectched
    | SuccessfulDatesFetched;