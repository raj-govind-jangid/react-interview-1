import { authAction } from "./types"
const isLoggedIn = localStorage.getItem('isLoggedIn');
const userToken = localStorage.getItem('userToken');
const userType = localStorage.getItem('userType');

const initialState = {
    isLoggedIn: isLoggedIn ? isLoggedIn : false,
    userToken: userToken ? userToken : null,
    userType: userType ? userType : null,
    error: {
        login: [],
        register: [],
    },
    message: {
        type: null,
        login: null,
        register: null,
    }
}

export const authReducer = (state = initialState,{type, payload}) => {
    switch(type){
        case authAction.SET_AUTH:
            return {...state, isLoggedIn: payload.isLoggedIn, userToken: payload.userToken, userType: payload.userType}
        case authAction.REMOVE_AUTH:
            return {...state, isLoggedIn: false, userToken: null, userType: null}
        case authAction.SET_MESSAGE:
            return {...state, message:payload}
        case authAction.REMOVE_MESSAGE:
            return {...state,message:{type:null,login:null,register:null}}
        case authAction.SET_ERROR:
            return {...state, error:payload}
        case authAction.REMOVE_ERROR:
            return {...state,
                error:{login:[],register:[]}
            }                
        default: return state;
    }
}


