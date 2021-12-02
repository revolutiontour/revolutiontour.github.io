export const addTodo = (data) => {
  return {
    type: "ADD_DATA",
    payload: data,
  };
};
export const delTodo = (data) => {
  return {
    type: "DEL_DATA",
    payload: data,
  };
};
export const editTodo = (data) => {
  return {
    type: "EDIT_DATA",
    payload: data,
  };
};
