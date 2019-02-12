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
import { LoginAction } from '../actions';
import { LoginSuccesFul, LoginFailed } from '../actions/loginActions';


const initialState: ILoginState = {
    error: null,
    loading: false,
    loginToken: null,
};

const loginApi: () => RunCmd<LoginAction> =
    () => Cmd.run(requestLogin, {
        failActionCreator:LoginFailed ,
        successActionCreator:LoginSuccesFul,
    });


export const login: LoopReducer<ILoginState, LoginAction> =
    (state: ILoginState = initialState, action: LoginAction): ILoginState | Loop<ILoginState, LoginAction> => {
        switch (action.type) {
            case constants.REQUEST_LOGIN:
                return loop(
                    {
                        ...state,
                        error: null,
                        loading: true
                    }, loginApi()
                );
            case constants.LOGIN_SUCCESSFUL:
                return {
                    ...state,
                    loginToken: action.data,
                    error: null,
                    loading: false,
                };
            case constants.LOGIN_FAILED:
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                    loginToken: null
                }
        }
        return state;
    }
