import {
  AUTH_ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
  ADMIN_LOADED,
  SET_LOADING,
} from "../types";

const initialState = {
  token: localStorage.getItem("Authorization"),
  users: [],
  user: null,
  isAuthenticated: null,
  loading: false,
  error: null,
};

function AuthReduce(state = initialState, action: any) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.isLoading,
      };
    case USER_LOADED:
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload.payload,
      };
    case ADMIN_LOADED:
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        users: action.payload,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("Authorization", action.payload);
      console.log(action.payload, "verfy token");
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        error: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("Authorization");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("Authorization", action.payload);
      console.log(action.payload, "verfy token");
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        error: false,
      };

    default:
      return state;
  }
}

export default AuthReduce;
