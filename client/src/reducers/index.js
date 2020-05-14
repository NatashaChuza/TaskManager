import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import taskReducer from "./taskReducer"

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    tasks: taskReducer
  });