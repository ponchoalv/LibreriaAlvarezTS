import { prices } from "./prices";
import { upload } from "./upload"
import { StoreState, PricesState, ManageUploadState } from "src/types";
import { PriceFetchAction, UploadListAction } from "src/actions";
import { combineReducers, LoopReducer  } from 'redux-loop';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';


const rootReducer = (history: History) => combineReducers<StoreState | LoopReducer<PricesState, PriceFetchAction> | LoopReducer<ManageUploadState, UploadListAction>>({
    router: connectRouter(history),
    prices: prices,
    upload: upload,
})

export default rootReducer
