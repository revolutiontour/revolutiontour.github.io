export const actionTypes = {
  LOGIN_SUCCESS:"LOGIN_SUCCESS",
  LOGOUT_SUCCESS:"LOGOUT_SUCCESS",
  REGISTER_SUCCESS:"REGISTER_SUCCESS"
}

export const LoginUser = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data,
  };
};
export const LogoutUser = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
    payload: null,
  };
};
export const RegistUser = (data) => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    payload: data,
  };
};
