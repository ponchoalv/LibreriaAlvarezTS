import { PriceFetchAction } from ".";
import * as constants from "src/constants";
import { PriceRow, DateOfList, LoadedList } from "src/types";

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