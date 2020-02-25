import React from "react";
import {
  AUTH_ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED
} from "../types";

const initialState = {
  token:localStorage.getItem("Authorization"),
  users: [],
  user: {},
  isAuthenticated: null,
  loading: true,
  error: null
};

function AuthReduce(state = initialState, action: any) {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload.data[0]
      };
    case 'loading':
        return{
            ...state,
            loading:true,
        }
    case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
      localStorage.setItem(
        "Authentication",
        action.payload
      );
      // console.log(action.payload.token, "verfy token")
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        error: false
      };
     case REGISTER_FAIL:
    // case LOGIN_FAIL:
    // case AUTH_ERROR:
     case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    // case LOGIN_SUCCESS:
    //   localStorage.setItem("token", action.payload.data[0].token);
    //   // console.log(action.payload.data[0].token, "verfy token");
    //   return {
    //     ...state,
    //     ...action.payload,
    //     isAuthenticated: true,
    //     loading: false,
    //     error: false
    //   };

    default:
      return state;
  }
}

export default AuthReduce;
