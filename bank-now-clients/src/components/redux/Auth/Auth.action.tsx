import axios from 'axios'
import {AUTH_ERROR, REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, USER_LOADED} from '../types'
import setAuthToken from '../../../utils/setAuthToken'


interface formData {
  fullName: string;
  email: string;
  password: string;
  phoneNumber:string;
  confirmPassword:string;
}
type loginData = Pick<formData, "email" | "password">;

const loadUser =  () => async (dispatch:any) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/v1/auth/signin");
    console.log(res.data.data[0]);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response
    });
    console.log(error.response);
  }
};
export const Register =  (data:formData) => async(dispatch:any) =>{
  dispatch({type:'loading'})
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/v1/auth/signup", data, config);
      // console.log(res);
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
      console.log(error.response.data.errors);
    }
  };

 // Login User
 export const Login = (data:loginData) => async (dispatch:any) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post("/api/v1/auth/signin", data, config);
    console.log(res.data.data[0]);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    loadUser();
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data
    });
    console.log(error.response);
  }
};

// logout User
export const LogOut = () => async (dispatch:any) => {
  dispatch({ type: LOGOUT });
};