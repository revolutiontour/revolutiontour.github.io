import { HYDRATE} from 'next-redux-wrapper';
const initialState = {
  user: [
    {
      username: "mamat",
      password: "garem"
    },
    {
      username: "admin",
      password: "admin"
    },
  ],
  auth: {
    success: false,
    username:null
  }
};

const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
          return {...state, ...payload};
    case "LOGIN_SUCCESS":
      return {
        ...state,
        auth: { ...state.auth, success: true,username:payload.username }
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        auth: { ...state.auth, success: false,username:null }
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: [...state.user, payload]
      };
    default:
      return {
        ...state
      };
  }
};

export default UserReducer;
