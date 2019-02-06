import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, LoopReducer } from 'redux-loop';
import { PriceFetchAction, UploadListAction } from 'src/actions';
import { IManageUploadState, IPricesState, IStoreState } from 'src/types';
import { prices } from './prices';
import { upload } from './upload';


const rootReducer = (history: History) => combineReducers<IStoreState | LoopReducer<IPricesState, PriceFetchAction> | LoopReducer<IManageUploadState, UploadListAction>>({
    prices,
    router: connectRouter(history),
    upload,
})

export default rootReducer
