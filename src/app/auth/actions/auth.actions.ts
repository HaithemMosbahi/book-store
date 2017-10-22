/**
 * Actions dispatched by the Auth module
 */

import { User } from './../models/user';
import { Action } from '@ngrx/store';

export const SIGN_UP = "[Auth] Sign up";
export const SIGN_UP_SUCCESS = "[Auth] Sign up success";
export const SIGN_UP_FAIL = "[Auth] Sign up fail";

export const SIGN_IN = "[Auth] Sign in";
export const SIGN_IN_SUCCESS = "[Auth] Sign in success";
export const SIGN_IN_FAIL = "[Auth] Sign in fail";

export class SignUp implements Action {
    readonly type = SIGN_UP;

    constructor(public payload: User) { }
}

export class SignUpSuccess implements Action {
    readonly type = SIGN_UP_SUCCESS;
}

export class SignUpFail implements Action {
    readonly type = SIGN_UP_FAIL;
}

export class SignIn implements Action {
    readonly type = SIGN_IN;

    constructor(public payload: User) { }
}

export class SignInSuccess implements Action {
    readonly type = SIGN_IN_SUCCESS;
}

export class SignInFail implements Action {
    readonly type = SIGN_IN_FAIL;
}

// Export new action type related to authentication module
export type Actions = SignUp | SignUpSuccess | SignUpFail |
                      SignIn | SignInSuccess | SignInFail
