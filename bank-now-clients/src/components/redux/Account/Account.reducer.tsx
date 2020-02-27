import React from "react";
import {
  AUTH_ERROR,
  ACCOUNT_LOADED,
  CREATE_SUCCESS,
  CREATE_FAIL
} from "../types";

const initialState = {
  user: null,
  isAccount: false,
  loading: false,
  error: null
};

function AccountReducer(state = initialState, action: any) {
  switch (action.type) {
    case ACCOUNT_LOADED:
      return {
        ...state,
        isAccount: true,
        loading: false,
        user: action.payload.payload
      };

    case CREATE_SUCCESS:
      return {
        ...state,
        // ...action.payload,
        user: action.payload.payload,
        isAccount: true,
        loading: false,
        error: false
      };

    case CREATE_FAIL:
      case AUTH_ERROR:
      return {
        ...state,
        isAccount:false,
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

export default AccountReducer;
