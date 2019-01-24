import { fetchPrices } from "../api";
import { PriceFetchAction, LoadFetchedPrices, FaildOnFetchedPrices } from '../actions';
import { PricesState } from '../types/index';
import { LoopReducer, Cmd, loop, Loop } from 'redux-loop';
import { INIT_FECTCH, SUCCESSFUL_FETCH, FAILED_FETCH } from '../constants/index';

const initialState: PricesState = {
    prices: [],
    loading: false,
    error: undefined,
}

export const prices:LoopReducer<PricesState, PriceFetchAction> = (state: PricesState = initialState, action: PriceFetchAction): PricesState | Loop<PricesState, PriceFetchAction> => {
    switch (action.type) {
        case INIT_FECTCH:
            return loop(
                { ...state, loading: true },
                Cmd.run(fetchPrices, {
                    successActionCreator: LoadFetchedPrices,
                    failActionCreator: FaildOnFetchedPrices,
                    args: ['2019-01-18'],
                }));
        case SUCCESSFUL_FETCH:
            return { ...state, prices: action.data, loading: false };
        case FAILED_FETCH:
            return { ...state, error:action.error };
    }
    return state;
}
