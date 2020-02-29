import React from "react";
import {
  AUTH_ERROR,
  ACCOUNT_LOADED,
  CREATE_SUCCESS,
  CREATE_FAIL,
  ADD_SUCCESS,
  ADD_FAIL,
  TRANSFER_FAIL,
  TRANSFER_SUCCESS,
  VIEW_TRANSACTION,
  TRANSACTION_FAIL
} from "../types";

const initialState = {
  user: null,
  transactions: [],
  isAccount: false,
  loading: false,
  isUpdated: false,
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

    case VIEW_TRANSACTION:
      return {
        ...state,
        isAccount: true,
        loading: false,
        transactions: action.payload.payload
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
    case ADD_SUCCESS:
      return {
        ...state,
        // ...action.payload,
        user: action.payload.payload,
        isAccount: true,
        isUpdated: true,
        loading: false,
        error: false
      };
    case TRANSFER_SUCCESS:
      return {
        ...state,
        // ...action.payload,
        user: action.payload.payload,
        isAccount: true,
        isUpdated: true,
        loading: false,
        error: false
      };
    case CREATE_FAIL:
    case AUTH_ERROR:
      return {
        ...state,
        isAccount: false,
        loading: false,
        user: null,
        error: action.payload
      };

    case ADD_FAIL:
    case TRANSFER_FAIL:
      return {
        ...state,
        loading: false,
        isUpdated: false,
        error: action.payload
      };
    case TRANSACTION_FAIL:
      return {
        ...state,
        loading: false,
        transactions: null,
        error:action.payload
      };

    default:
      return state;
  }
}

export default AccountReducer;
