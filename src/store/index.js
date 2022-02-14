import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";

const reducers = combineReducers({
    auth: authReducer,
})

export default reducers;