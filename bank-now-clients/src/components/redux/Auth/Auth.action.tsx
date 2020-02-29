import axios from "axios";
import {
  AUTH_ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED
} from "../types";
import setAuthToken from "../../../utils/setAuthToken";

interface formData {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
}
type loginData = Pick<formData, "email" | "password">;

export const loadUser = () => async (dispatch: any) => {
  if (localStorage.getItem("Authorization")) {
    setAuthToken(localStorage.getItem("Authorization")!);
  }

  try {
    const res = await axios.get("/api/v1/auth/signin");
    // console.log(res);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response
    });
     
  }
};

export const Register = (data: formData) => async (dispatch: any) => {
  dispatch({ type: "loading" });
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post("/api/v1/auth/signup", data, config);
     
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.payload.token
    });

    loadUser();
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.errors
    });
     
  }
};

// Login User
export const Login = (data: loginData) => async (dispatch: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post("/api/v1/auth/signin", data, config);
    // console.log(res.data.data[0]);
    localStorage.setItem("Authorization", res.data.payload.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.payload.token
    });
    loadUser();
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.error
    });
    console.log(error.response.data.error)
     
  }
};

// logout User
export const LogOut = () => async (dispatch: any) => {
  dispatch({ type: LOGOUT });
};
