import { actionTypes } from '../actions/member';
import { HYDRATE} from 'next-redux-wrapper';
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
  
  const member = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case HYDRATE:
        console.log("member hydrate",payload)
        console.log("HYDRATE member")
        if(state.success){
          delete payload.member.success
        }
        if(state.leader && state.participant){
          delete payload.member.leader
          delete payload.member.participant
        }
        return {...state,  ...payload.member}
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
  
  export default member;
  