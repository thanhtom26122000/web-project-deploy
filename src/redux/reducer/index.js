import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./user";
import adminReducer from "./admin"
const rootReducer = combineReducers({
    authReducer: authReducer,
    userReducer: userReducer,
    adminReducer : adminReducer
})
export default rootReducer