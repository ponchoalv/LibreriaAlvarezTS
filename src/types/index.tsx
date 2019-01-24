import { RouterState } from 'connected-react-router';

export interface EnthusiasmState {
    readonly languageName: string;
    readonly enthusiasmLevel: number;
}

// objeto que responde GET /api/prices-by-fecha?fecha=2019-01-18
export interface PriceRow {
    desc: string;
    code: string;
    price: number;
    lista: string;
    fecha: Date;
}

export interface PricesState {
    readonly prices: Array<PriceRow>;
    readonly loading: boolean;
    readonly error?: Error;
}

export interface StoreState {
    readonly enthusiasm: EnthusiasmState;
    readonly prices: PricesState;
    readonly router: RouterState;
}