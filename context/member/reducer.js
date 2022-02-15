import { actionTypes } from "./action";

const initialState = {
    username: {},
    tourId: {},
    userId: {},
    isLeader: {},
    success:false,
    isRegisteredIn: false,
    userRegister: {},
    leader:null,
    participant:null,
  };
  
 export const memberReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case actionTypes.LOGIN_SUCCESS:
        return {
            ...state, 
            success: true,
            username:payload.userName,
            tourId:payload.tourId,
            isLeader:payload.isLeader
        };
      case actionTypes.LOGOUT_SUCCESS:
        return {
          ...initialState,
          success: false,username:null
        };
        case actionTypes.LIST_TL_SUCCESS:
          return {
            ...state,
            leader:payload
          };
        case actionTypes.LIST_TP_SUCCESS:
            return {
              ...state,
              participant:payload
            };
      case actionTypes.REGISTER_SUCCESS:
        return {
          ...state,
          isRegisteredIn: true, userRegister: payload
        };
        case actionTypes.REGISTER_TP_SUCCESS:
          return {
            ...state,
            isRegisteredIn: true, userRegister: payload
          };
          default:
            return state;
    }
  };
  