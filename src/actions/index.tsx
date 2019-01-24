import * as constants from '../constants';
import { PriceRow } from "../types";

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
    payload: number;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(step: number): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM,
        payload: step
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}

export interface InitPriceFetch {
    type: constants.INIT_FECTCH;
}

export interface SuccessfulPriceFetched {
    type: constants.SUCCESSFUL_FETCH;
    data: Array<PriceRow>;
}

export interface FailedPriceFetched {
    type: constants.FAILED_FETCH;
    error: Error;
}

export type PriceFetchAction = InitPriceFetch | SuccessfulPriceFetched | FailedPriceFetched;

export function FetchPrices(): PriceFetchAction {
    return {
        type: constants.INIT_FECTCH
    }
}

export function LoadFetchedPrices(data: Array<PriceRow>): PriceFetchAction {
    return {
        type: constants.SUCCESSFUL_FETCH,
        data,
    }
}

export function FaildOnFetchedPrices(error: Error): PriceFetchAction {
    return {
        type: constants.FAILED_FETCH,
        error,
    }
}