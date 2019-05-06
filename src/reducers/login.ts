import {
    Cmd,
    loop,
    Loop,
    LoopReducer,
    RunCmd
} from 'redux-loop';
import {
    requestLogin
} from '../api';
import * as constants from '../constants/login';
import { ILoginState } from '../types/index';
import { LoginAction } from '../actions'
import { LoginSuccesFul, LoginFailed } from '../actions/loginActions';



const initialState: ILoginState = {
    error: null,
    loading: false,
    loginToken: null,
};

const loginApi: (data: FormData) => RunCmd<LoginAction> =
    (data: FormData) => Cmd.run(requestLogin, {
        args: [data],
        failActionCreator: LoginFailed,
        successActionCreator: LoginSuccesFul,
    });


export const login: LoopReducer<ILoginState, LoginAction> =
    (state: ILoginState = initialState, action: LoginAction | any): ILoginState | Loop<ILoginState, LoginAction> => {
        switch (action.type) {
            case constants.REQUEST_LOGIN:
                return loop(
                    {
                        ...state,
                        error: null,
                        loading: true,
                    }, loginApi(action.payload));
            case constants.LOGIN_SUCCESSFUL:
                return {
                    error: null,
                    loading: false,
                    loginToken: action.payload,
                };
            case constants.LOGIN_FAILED:
                return {
                    error: action.payload,
                    loading: false,
                    loginToken: null,
                };
            default: return state;
            }            
    }
