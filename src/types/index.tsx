import { RouterState } from 'connected-react-router';

// objeto que responde GET /api/prices-by-fecha?fecha=2019-01-18
export interface IPriceRow {
    readonly desc: string;
    readonly code: string;
    readonly price: number;
    readonly lista: string;
    readonly fecha: string;
}

export interface ILoadedList {
    readonly registros: number;
    readonly lista: string;
    readonly fecha: string;
}

export interface IPricesState {
    readonly prices: IPriceRow[];
    readonly loading: boolean;
    readonly error: Error | undefined;
    readonly searchText: string;
    readonly selectedList: string;
    readonly selectOptions: string[];
    readonly allListOptions: ILoadedList[];
    readonly selectedDate: IDateOfList;
    readonly datesLoaded: IDateOfList[];
}

export interface IStoreState {
    readonly prices: IPricesState;
    readonly router: RouterState;
    readonly upload: IManageUploadState;
}

export interface IDateOfList {
    readonly fecha: string;
}

export interface IManageUploadState {
    readonly allLoadedLists: ILoadedList[];
    readonly filteredLists: ILoadedList[];
    readonly selectedDate: IDateOfList;
    readonly loading: boolean;
    readonly error: Error | undefined;
    readonly listsDateOptions: IDateOfList[];
    addingNewDate: boolean;
}

export interface ILoadList {
    readonly success: boolean;
}

export interface IDeleteListData {
    readonly lista: string;
    readonly fecha: string;
}