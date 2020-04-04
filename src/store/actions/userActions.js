export const USER_LOGIN_START =  "User Login Start";
export const USER_LOGIN_FAIL = "User Login Fail";
export const USER_LOGIN_SUCCESS = "User Login Sucess";

export const USER_LOGOFF = "User Logoff";

export const SET_ERROR = "Set Error";
export const CLEAR_ERROR = "Clear Error";

export const userLoginStart = () => {
    return {
        type: USER_LOGIN_START
    }
}

export const userLoginFail = () => {
    return {
        type: USER_LOGIN_FAIL
    }
}

export const userLoginSuccess = (payload) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload
    }
}

export const userLogoff = () => {
    localStorage.clear("token");
    return {
        type: USER_LOGOFF
    }
}

export const setError = (payload) => {
    return {
        type: SET_ERROR,
        payload
    }
}

export const clearError = () => {
    return {
        type: SET_ERROR
    }
}

export const loginUser = (credentials) => {
    return (dispatch) => {
        dispatch(userLoginStart());
        setTimeout(() => {
            dispatch(userLoginSuccess(credentials.Email));
        }, 1000);
    }
}

