import { UploadListAction } from '.';
import * as constants from '../constants';
import { DateOfList, LoadedList } from 'src/types';

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