import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import UserReducer from "./UserReducer";
import member from "./member"
import schedule from './schedule'
import object from './object'
import { HYDRATE } from "next-redux-wrapper";

const combinedReducers = combineReducers({
  // todoReducer,
  // UserReducer,
  member,
  schedule,
  object,
});
const allReducers = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  else {
    return combinedReducers(state, action);
  }
}

export default combinedReducers;