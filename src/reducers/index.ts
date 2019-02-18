import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, LoopReducer } from 'redux-loop';
import { login } from './login';
import { PriceFetchAction, UploadListAction, LoginAction } from '../actions';
import { IManageUploadState, IPricesState, IStoreState, ILoginState } from '../types';
import { prices } from './prices';
import { upload } from './upload';


const rootReducer = (history: History) => combineReducers<
                                                IStoreState |
                                                LoopReducer<IPricesState, PriceFetchAction> | 
                                                LoopReducer<IManageUploadState, UploadListAction> | 
                                                LoopReducer<ILoginState, LoginAction>>({
    prices,
    router: connectRouter(history),
    upload,
    login,
})

export default rootReducer
