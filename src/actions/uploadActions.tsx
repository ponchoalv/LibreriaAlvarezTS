import { CLEAR_LOADED_STATE } from "src/constants/listPrices";
import * as constants from 'src/constants/manageLists';


import {
    IDateOfList,
    IDeleteListData,
    ILoadedList,
    ILoadList
    } from 'src/types';

export interface InitLastDateFetch {
    type: constants.INIT_LAST_DATE_FETCH;
}
export interface IFailOnFetch {
    type: constants.FAILED_FETCH;
    error: Error;
}
export interface ISuccessfulListsFectched {
    type: constants.SUCCESSFUL_LIST_NAME_FETCH;
    data: ILoadedList[];
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

export interface InitListUpload {
    type: constants.INIT_LIST_UPLOAD;
    data: FormData;
}

export interface ISuccessfulListUpload {
    type: constants.LIST_UPLOAD_SUCCESSFUL;
    data: ILoadList
}

export interface IStartEditing {
    type: constants.START_EDITING;
}

export interface IStopEditing {
    type: constants.STOP_EDITING;
}

export interface IDeleteList {
    type: constants.DELETE_LIST;
    value: IDeleteListData;
}

export interface IListDeletedSuccessfuly {
    type: constants.DELETE_LIST_SUCCESSFUL;
}

export interface IClearEditingDate {
    type: constants.CLEAR_EDITING_DATE;
}

export interface IClearLoadedState {
    type: CLEAR_LOADED_STATE;
}

export type UploadListAction = 
    | InitLastDateFetch
    | IClearLoadedState
    | ISuccessfulLastListDateFetched
    | IFailOnFetch
    | IUpdateSelectedDate
    | ISuccessfulListsFectched
    | ISuccessfulDatesFetched
    | InitListUpload
    | ISuccessfulListUpload
    | IStartEditing
    | IStopEditing
    | IDeleteList
    | IListDeletedSuccessfuly
    | IClearEditingDate;

export function FetchLastDates (): UploadListAction {
    return {
        type: constants.INIT_LAST_DATE_FETCH
    }
}

export function UploadList(data: FormData): UploadListAction {
    return {
        data,
        type: constants.INIT_LIST_UPLOAD,
        
    }
}

export function SuccessfulLoadedList(data: ILoadList): UploadListAction {
    return {
        data,
        type: constants.LIST_UPLOAD_SUCCESSFUL,
    }
}

export function FaildOnFetch(error: Error): UploadListAction {
    return {
        error,
        type: constants.FAILED_FETCH,
    }
}

export function LoadFetchedLists(data: ILoadedList[]): UploadListAction {
    return {
        data,
        type: constants.SUCCESSFUL_LIST_NAME_FETCH,   
    }
}

export function LoadFetchedDates(data: IDateOfList[]): UploadListAction {
    return {
        data,
        type: constants.SUCCESSFUL_DATES_FETCH,
    }
}

export function LoadFetchedLastListDate(data:string): UploadListAction {
    return {
        data,
        type: constants.SUCCESSFUL_LAST_DATE_FETCH,
    }
}

export function UpdateSelectedDate(value: IDateOfList) : UploadListAction {
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

export function DeleteList(value: IDeleteListData) : UploadListAction {
    return {
        type: constants.DELETE_LIST,
        value
    }
}

export function ListDeletedSuccessfuly() : UploadListAction {
    return {
        type: constants.DELETE_LIST_SUCCESSFUL,
    }
}

export function ClearEditingDate() : UploadListAction {
    return {
        type: constants.CLEAR_EDITING_DATE,
    }
}

export function ClearLoadedState() : UploadListAction {
    return {
        type: CLEAR_LOADED_STATE,
    }
}