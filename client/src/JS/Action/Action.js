import axios from "axios";
import {
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    FAIL_USER,
    LOAD_USER,
    LOGIN_USER,
    LOG_OUT,
    REGISTER_USER,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE,
} from "../ActionType/ActionType";

// REGISTER new user
export const register = (newUser) => async (dispatch) => {
  dispatch({ type: LOAD_USER }); // appel load

  try {
    let result = await axios.post("/api/user/register", newUser); // axios appel api  result.data <= token ,data ,newuser,msg
    dispatch({ type: REGISTER_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error });
  }
};
// login
export const login = (user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: LOG_OUT });
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/user/deleteUser/${id}`);
    dispatch({ type: DELETE_USER_SUCCESS });
    dispatch({ type: LOG_OUT });
  } catch (error) {
    dispatch({ type: DELETE_USER_FAILURE, payload: error });
  }
};

export const editUser = (id, editedUser) => async (dispatch) => {
    dispatch({ type: LOAD_USER });

    try {
        let result = await axios.put(`/api/user/editUser/${id}`, editedUser);
        dispatch({ type: EDIT_USER_SUCCESS, payload: result.data  });
    } catch (error) {
        dispatch({ type: EDIT_USER_FAILURE, payload: error });
    }
};
