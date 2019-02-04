import * as constants from '../constants/manageLists';
import { DateOfList, LoadedList } from 'src/types';


export interface InitLastDateFetch {
    type: constants.INIT_LAST_DATE_FETCH;
}
export interface FailOnFetch {
    type: constants.FAILED_FETCH;
    error: Error;
}
export interface SuccessfulListsFectched {
    type: constants.SUCCESSFUL_LIST_NAME_FETCH;
    data: Array<LoadedList>;
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

export type UploadListAction = 
    | InitLastDateFetch
    | SuccessfulLastListDateFetched
    | FailOnFetch
    | UpdateSelectedDate
    | SuccessfulListsFectched
    | SuccessfulDatesFetched;

export function FetchLastDates () : UploadListAction {
    return {
        type: constants.INIT_LAST_DATE_FETCH
    }
}

export function FaildOnFetch(error: Error): UploadListAction {
    return {
        type: constants.FAILED_FETCH,
        error,
    }
}

export function LoadFetchedLists(data: Array<LoadedList>): UploadListAction {
    return {
        type: constants.SUCCESSFUL_LIST_NAME_FETCH,
        data,
    }
}

export function LoadFetchedDates(data: Array<DateOfList>): UploadListAction {
    return {
        type: constants.SUCCESSFUL_DATES_FETCH,
        data,
    }
}

export function LoadFetchedLastListDate(data:string): UploadListAction {
    return {
        type: constants.SUCCESSFUL_LAST_DATE_FETCH,
        data,
    }
}

export function UpdateSelectedDate(value: DateOfList) : UploadListAction {
    return {
        type: constants.UPDATE_SELECTED_DATE,
        value,
    }
}