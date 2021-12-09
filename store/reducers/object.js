import { actionTypes } from "../actions/object";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  oAll: null,
  oDetail: null,
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
      console.log("HYDRATE object")
      if(state.oAll){
        delete payload.object.oAll
      }
      return {...state, ...payload.object}
    case actionTypes.LIST_OBJECT_SUCCESS:
      return { 
          ...state, 
          oAll: payload
        };
    case actionTypes.DETAIL_OBJECT_SUCCESS:
      return { 
          ...state, 
          oDetail: payload
        };
        case actionTypes.CURRENT_REGISTER_OBJECT:
          return { 
              ...state, 
                CurrentData: 
                {...payload}
              
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
              return state;
  }
};

export default object;
