import * as constants from '../constants';
import { PriceRow, LoadedList } from "../types";

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
    payload: number;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(step: number): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM,
        payload: step
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}

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

export type PriceFetchAction = 
    | InitPriceFetch 
    | SuccessfulPriceFetched 
    | FailOnFetch 
    | UpdateSearchText 
    | SuccessfulListsFectched
    | UpdateSelectedList;

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

export function LoadFetchedLists(data: Array<LoadedList>) : PriceFetchAction {
    return {
        type: constants.SUCCESSFUL_LIST_NAME_FETCH,
        data,
    }
}

export function UpdateSelectedList(value: string) : PriceFetchAction {
    return {
        type: constants.UPDATE_SELECTED_LIST,
        value,
    }
}


