import { combineReducers, LoopReducer } from "redux-loop";
import { login } from "./login";
import { PriceFetchAction, UploadListAction, LoginAction, SalesActions } from "../actions";
import {
  IManageUploadState,
  IPricesState,
  IStoreState,
  ILoginState,
  ISalesState
} from "../types";
import { prices } from "./prices";
import { upload } from "./upload";
import { sales } from "./sales";

const rootReducer = () =>
  combineReducers<
    | IStoreState
    | LoopReducer<IPricesState, PriceFetchAction>
    | LoopReducer<IManageUploadState, UploadListAction>
    | LoopReducer<ILoginState, LoginAction>
    | LoopReducer<ISalesState, SalesActions>
  >({
    prices,
    upload,
    login,
    sales
  });

export default rootReducer;
