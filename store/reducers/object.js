import { actionTypes } from "../actions/object";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  All: null,
  Detail: null,
  CurrentData:{
    destination:null,
    desc:null,
    map:null,
  }
};

const object = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return { 
          ...state, 
        ...payload.object };
    case actionTypes.LIST_OBJECT_SUCCESS:
      return { 
          ...state, 
          ...{ All: payload } 
        };
    case actionTypes.DETAIL_OBJECT_SUCCESS:
      return { 
          ...state, 
          ...{ Detail: payload } 
        };
        case actionTypes.CURRENT_REGISTER_OBJECT:
          return { 
              ...state, 
              ...{ 
                CurrentData: 
                {...payload}
              } 
            };
        case actionTypes.REGISTER_MAP_OBJECT_SUCCESS:
          return { 
              ...state, 
              ...{ 
                CurrentData: 
                {
                  ...state.CurrentData,
                  map:payload
                }
              } 
            };
    default:
      return {
        ...state
      };
  }
};

export default object;
