import axios from "axios";
import {
  AUTH_ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
  ADMIN_LOADED,
  ADMIN_FAIL,
  SET_LOADING,
} from "../types";
import setAuthToken from "../../../utils/setAuthToken";
import { BASE_URL } from "../../../utils";

interface formData {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
}
type loginData = Pick<formData, "email" | "password">;

export const loading = (isLoading: boolean) => ({
  type: SET_LOADING,
  isLoading,
});

export const loadUser = () => async (dispatch: any) => {
  if (localStorage.getItem("Authorization")) {
    setAuthToken(localStorage.getItem("Authorization")!);
  }

  try {
    const res = await axios.get(BASE_URL + "/api/v1/auth/signin");
    // console.log(res);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response,
    });
  }
};

export const Register = (data: formData) => async (dispatch: any) => {
  dispatch(loading(true));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      BASE_URL + "/api/v1/auth/signup",
      data,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.payload.token,
    });
    // stop loading
    dispatch(loading(false));
    loadUser();
  } catch (error) {
    dispatch(loading(false));
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.errors,
    });
  }
};

// Login User
export const Login = (data: loginData) => async (dispatch: any) => {
  // loading
  dispatch(loading(true));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      BASE_URL + "/api/v1/auth/signin",
      data,
      config
    );
    // console.log(res.data.data[0]);
    localStorage.setItem("Authorization", res.data.payload.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.payload.token,
    });
    // stop loading
    dispatch(loading(false));
    loadUser();
  } catch (error) {
    dispatch(loading(false));
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.error,
    });
    console.log(error.response.data.error);
  }
};

export const getAllUsersDetailsForAdmin = () => async (dispatch: any) => {
  if (localStorage.getItem("Authorization")) {
    setAuthToken(localStorage.getItem("Authorization")!);
  }

  try {
    //loading
    dispatch(loading(true));
    const res = await axios.get(BASE_URL + "/api/v1/admin");
    //  console.log(res);
    dispatch({
      type: ADMIN_LOADED,
      payload: res.data,
    });
    // stop loading
    dispatch(loading(false));
  } catch (error) {
    dispatch(loading(false));
    dispatch({
      type: ADMIN_FAIL,
      payload: error.response,
    });
  }
};

// logout User
export const LogOut = () => async (dispatch: any) => {
  dispatch({ type: LOGOUT });
};
