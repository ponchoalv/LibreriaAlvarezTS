import * as constants from '../constants/manageLists';
import { DateOfList, LoadedList, LoadList, DeleteListData } from 'src/types';


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

export interface InitListUpload {
    type: constants.INIT_LIST_UPLOAD;
    data: FormData;
}

export interface SuccessfulListUpload {
    type: constants.LIST_UPLOAD_SUCCESSFUL;
    data: LoadList
}

export interface StartEditing {
    type: constants.START_EDITING;
}

export interface StopEditing {
    type: constants.STOP_EDITING;
}

export interface DeleteList {
    type: constants.DELETE_LIST;
    value: DeleteListData;
}

export interface ListDeletedSuccessfuly {
    type: constants.DELETE_LIST_SUCCESSFUL;
}

export type UploadListAction = 
    | InitLastDateFetch
    | SuccessfulLastListDateFetched
    | FailOnFetch
    | UpdateSelectedDate
    | SuccessfulListsFectched
    | SuccessfulDatesFetched
    | InitListUpload
    | SuccessfulListUpload
    | StartEditing
    | StopEditing
    | DeleteList
    | ListDeletedSuccessfuly;

export function FetchLastDates (): UploadListAction {
    return {
        type: constants.INIT_LAST_DATE_FETCH
    }
}

export function UploadList(data: FormData): UploadListAction {
    return {
        type: constants.INIT_LIST_UPLOAD,
        data
    }
}

export function SuccessfulLoadedList(data: LoadList): UploadListAction {
    return {
        type: constants.LIST_UPLOAD_SUCCESSFUL,
        data,
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

export function StartEditing() : UploadListAction {
    return {
        type: constants.START_EDITING
    }
}

export function StopEditing() : UploadListAction {
    return {
        type: constants.STOP_EDITING
    }
}

export function DeleteList(value: DeleteListData) : UploadListAction {
    return {
        type: constants.DELETE_LIST,
        value
    }
}export function ListDeletedSuccessfuly() : UploadListAction {
    return {
        type: constants.DELETE_LIST_SUCCESSFUL
    }
}