import React from "react";
import { memberReducer } from "./member/reducer";
import { objectReducer } from "./object/reducer";
import { scheduleReducer } from "./schedule/reducer";

import { combineReducer } from "../helpers/CombinedReducers";
//#COMBINE STATE
const rootReducer = { member: memberReducer, object:objectReducer, schedule:scheduleReducer};

export const reducers = combineReducer(rootReducer);