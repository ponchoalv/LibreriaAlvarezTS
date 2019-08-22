import * as constants from '../constants/sales';
import { IDateOfList, IVenta } from '../types';

// List of prices events
export interface InitPriceFetch {
    type: constants.INIT_FECTCH;
}

export interface ISuccessfulDatesFetched {
    type: constants.SUCCESSFUL_DATES_FETCH;
    data: IDateOfList[];
}

export interface IFailOnFetch {
    type: constants.FAILED_FETCH;
    error: Error;
}

export interface ISuccessfulSalesFetched {
    type: constants.SUCCESSFUL_SALES_FETCH;
    data: IVenta[];
}

export interface IUpdateSelectedDate {
    type: constants.SELECT_DATE;
    data: string;
}

export type SalesActions = 
    | InitPriceFetch 
    | IFailOnFetch 
    | ISuccessfulDatesFetched
    | IUpdateSelectedDate
    | ISuccessfulSalesFetched;


export function FetchSales(): SalesActions {
    return {
        type: constants.INIT_FECTCH
    }
}

export function FaildOnFetch(error: Error): SalesActions {
    return {
        error,
        type: constants.FAILED_FETCH,
    }
}


export function LoadFetchedSales(data: IVenta[]) : SalesActions {
    return {
        data,
        type: constants.SUCCESSFUL_SALES_FETCH,
    }
}

export function LoadFetchedDates(data: IDateOfList[]) : SalesActions {
    return {
        data,
        type: constants.SUCCESSFUL_DATES_FETCH,
    }
}

export function SelectDate(data: string) : SalesActions {
  return {
    data,
    type: constants.SELECT_DATE
  }
}