import * as constants from "../constants/login";

import { IToken } from "../types/index";

export interface IRequestLogin {
  payload: FormData;
  type: constants.REQUEST_LOGIN;
}
export interface ILoginSuccessful {
  payload: IToken;
  type: constants.LOGIN_SUCCESSFUL;
}
export interface ILoginFailed {
  payload: Error;
  type: constants.LOGIN_FAILED;
}

export interface ILogout {
  type: constants.LOGOUT
}

export type LoginAction = IRequestLogin | ILoginFailed | ILoginSuccessful | ILogout;

export function RequestLogin(data: FormData): LoginAction {
  return {
    payload: data,
    type: constants.REQUEST_LOGIN
  };
}

export function LoginSuccesFul(data: IToken): LoginAction {
  return {
    payload: data,
    type: constants.LOGIN_SUCCESSFUL
  };
}

export function LoginFailed(error: Error): LoginAction {
  return {
    payload: error,
    type: constants.LOGIN_FAILED
  };
}

export function Logout(): LoginAction {
  return {
    type: constants.LOGOUT
  }
}
