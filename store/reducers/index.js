import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import UserReducer from "./UserReducer";
import member from "./member"
import schedule from './schedule'
import object from './object'
export default combineReducers({
  // todoReducer,
  // UserReducer,
  member,
  schedule,
  object,
});
