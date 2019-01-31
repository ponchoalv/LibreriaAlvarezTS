import { RouterState } from 'connected-react-router';

export interface EnthusiasmState {
    readonly languageName: string;
    readonly enthusiasmLevel: number;
}

// objeto que responde GET /api/prices-by-fecha?fecha=2019-01-18
export interface PriceRow {
    readonly desc: string;
    readonly code: string;
    readonly price: number;
    readonly lista: string;
    readonly fecha: string;
}

export interface LoadedList {
    readonly registros: number;
    readonly lista: string;
    readonly fecha: string;
}

export interface PricesState {
    readonly prices: Array<PriceRow>;
    readonly loading: boolean;
    readonly error: Error | undefined;
    readonly searchText: string;
    readonly selectedList: string;
    readonly selectOptions: Array<string>;
    readonly allListOptions: Array<LoadedList>;
    readonly selectedDate: DateOfList;
    readonly datesLoaded: Array<DateOfList>;
}

export interface StoreState {
    readonly prices: PricesState;
    readonly router: RouterState;
}

export interface DateOfList {
    readonly fecha: string;
}

export interface ManageUploadState {
    readonly filteredLists: Array<LoadedList>;
    readonly selectedDate: DateOfList;
}