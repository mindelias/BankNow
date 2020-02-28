import React from "react";
import { combineReducers } from "redux";
import AuthReducer from "./Auth/Auth.reducer";
import AccountReducer from "./Account/Account.reducer";
import AlertReducer from "./alert/AlertReducer"

export default combineReducers({ Auth: AuthReducer, Account: AccountReducer, Alert:AlertReducer });
