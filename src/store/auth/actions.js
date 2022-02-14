import { authAction } from "./types";

export const setAuth = (payload) => {
    let data = {
        isLoggedIn: true,
        userToken: payload.userToken,
        userType: payload.userType
    }
    localStorage.setItem('isLoggedIn',true)
    localStorage.setItem('userToken',payload.userToken)
    localStorage.setItem('userType',payload.userType)
    return {
        type: authAction.SET_AUTH,
        payload: data
    };
}

export const clearAuth = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userToken')
    localStorage.removeItem('userType')
    return {
        type: authAction.REMOVE_AUTH,
    };
}