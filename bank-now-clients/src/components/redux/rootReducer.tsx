import React from 'react'
import {combineReducers} from 'redux'
import AuthReducer from './Auth/Auth.reducer'



export default combineReducers({Auth:AuthReducer})
  