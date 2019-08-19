import { combineReducers, LoopReducer } from "redux-loop";
import { login } from "./login";
import { PriceFetchAction, UploadListAction, LoginAction } from "../actions";
import {
  IManageUploadState,
  IPricesState,
  IStoreState,
  ILoginState
} from "../types";
import { prices } from "./prices";
import { upload } from "./upload";

const rootReducer = () =>
  combineReducers<
    | IStoreState
    | LoopReducer<IPricesState, PriceFetchAction>
    | LoopReducer<IManageUploadState, UploadListAction>
    | LoopReducer<ILoginState, LoginAction>
  >({
    prices,
    upload,
    login
  });

export default rootReducer;
