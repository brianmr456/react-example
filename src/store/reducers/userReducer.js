import * as UserAction from '../actions/userActions';

const initialState = {
    data: null,
    isLoggedIn: false,
    isLoading: false,
    errorMsg: null
}

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case UserAction.USER_LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case UserAction.USER_LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false
            }
        case UserAction.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                data: action.payload
            }
        case UserAction.USER_LOGOFF:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                data: null
            }
        case UserAction.SET_ERROR:
            return {
                ...state,
                errorMsg: action.payload
            }
        case UserAction.CLEAR_ERROR:
            return {
                ...state,
                errorMsg: null
            }
        default: return state;
    }
}