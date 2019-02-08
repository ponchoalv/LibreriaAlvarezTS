import { RouterState } from 'connected-react-router';
import { match } from 'react-router';

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
    readonly loaded: boolean;
    readonly error: Error | null;
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
    readonly addingNewDate: boolean;
    readonly allLoadedLists: ILoadedList[];
    readonly error: Error | null;
    readonly filteredLists: ILoadedList[];
    readonly loading: boolean;
    readonly listTypeOptions: string[];
    readonly listsDateOptions: IDateOfList[];
    readonly selectedDate: IDateOfList;
    readonly nuevaPlanilla: boolean;
}

export interface ILoadList {
    readonly success: boolean;
}

export interface IDeleteListData {
    readonly lista: string;
    readonly fecha: string;
}

export interface IRoutesProps {
    match: match<any>;
}