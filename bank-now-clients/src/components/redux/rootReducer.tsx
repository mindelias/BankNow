import React from "react";
import { combineReducers } from "redux";
import AuthReducer from "./Auth/Auth.reducer";
import AccountReducer from "./Account/Account.reducer";

export default combineReducers({ Auth: AuthReducer, Account: AccountReducer });
