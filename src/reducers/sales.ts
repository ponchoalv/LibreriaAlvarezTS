import { Cmd, loop, Loop, LoopReducer, RunCmd } from "redux-loop";
import { SalesActions } from "../actions";
import {
  FaildOnFetch,
  LoadFetchedDates,
  LoadFetchedSales
} from "../actions/salesActions";
import * as constants from "../constants/sales";
import { ISalesState } from "../types/index";
import {
  obtenerFechasConVentas,
  obtenerVentasPorFecha
} from "../api";

const initialState: ISalesState = {
  datesLoaded: [],
  error: null,
  loaded: false,
  loading: false,
  sales: [],
  selectedDate: ""
};

const loadSalesByDate: (date: string) => RunCmd<SalesActions> = (
  date: string
) =>
  Cmd.run(obtenerVentasPorFecha, {
    args: [date],
    failActionCreator: FaildOnFetch,
    successActionCreator: LoadFetchedSales
  });

const loadDates: () => RunCmd<SalesActions> = () =>
  Cmd.run(obtenerFechasConVentas, {
    failActionCreator: FaildOnFetch,
    successActionCreator: LoadFetchedDates
  });

export const sales: LoopReducer<ISalesState, SalesActions> = (
  state = initialState,
  action: SalesActions
): ISalesState | Loop<ISalesState, SalesActions> => {
  switch (action.type) {
    case constants.INIT_FECTCH:
      return loop({ ...state, error: null, loading: true }, loadDates());
    case constants.SUCCESSFUL_DATES_FETCH: {
      const lastDate = action.data[0] ? action.data[0].fecha : "1990-01-01";
      return loop(
        {
          ...state,
          loading: true,
          datesLoaded: action.data,
          selectedDate: lastDate
        },
        loadSalesByDate(lastDate)
      );
    }
    case constants.SUCCESSFUL_SALES_FETCH:
      return {
        ...state,
        sales: action.data,
        loading: false,
        loaded: true
      };
    case constants.FAILED_FETCH:
      return { ...state, error: action.error, loading: false };
    case constants.SELECT_DATE:
      return loop(
        {
          ...state,
          loading: true,
          selectedDate: action.data
        },
        loadSalesByDate(action.data)
      );
    default:
      return state;
  }
};
