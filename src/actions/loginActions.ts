import * as constants from '../constants/login';

import {
    IToken
    } from '../types/index';

export interface IRequestLogin {
    data: FormData;
    type: constants.REQUEST_LOGIN;
}
export interface ILoginSuccessful {
    data: IToken
    type: constants.LOGIN_SUCCESSFUL;
}
export interface ILoginFailed {
    error: Error;
    type: constants.LOGIN_FAILED;
}

export type LoginAction = 
    | IRequestLogin
    | ILoginSuccessful
    | ILoginFailed;

export function RequestLogin(data: FormData): LoginAction {
    return {
        data,
        type: constants.REQUEST_LOGIN,
    }
}

export function LoginSuccesFul(data: IToken): LoginAction {
    return {
        data,
        type: constants.LOGIN_SUCCESSFUL,
        
    }
}

export function LoginFailed(error: Error): LoginAction {
    return {
        error,
        type: constants.LOGIN_FAILED,
    }
}