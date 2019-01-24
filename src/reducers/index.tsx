import { enthusiasm } from "./enthusiasm";
import { prices } from "./prices";
import { StoreState, PricesState } from "src/types";
import { PriceFetchAction } from "src/actions";
import { combineReducers, LoopReducer  } from 'redux-loop';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';


const rootReducer = (history: History) => combineReducers<StoreState | LoopReducer<PricesState, PriceFetchAction>>({
    router: connectRouter(history),
    enthusiasm: enthusiasm,
    prices: prices,
})

export default rootReducer