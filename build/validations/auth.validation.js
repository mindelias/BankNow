"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _celebrate = require("celebrate");

var userValidation = {
  // POST /api/v1/auth/signup
  signUp: {
    body: {
      fullName: _celebrate.Joi.string().max(200).required(),
      email: _celebrate.Joi.string().email().max(200).required(),
      phoneNumber: _celebrate.Joi.string().max(200).required(),
      password: _celebrate.Joi.string().min(6).max(255).required(),
      confirmPassword: _celebrate.Joi.string().required()
    }
  },
  signIn: {
    body: {
      email: _celebrate.Joi.string().email().max(200).required(),
      password: _celebrate.Joi.string().max(255).required()
    }
  },
  Update: {
    body: {
      oldPassword: _celebrate.Joi.string().required(),
      newPassword: _celebrate.Joi.string().min(6).max(255).invalid("").required(),
      confirmPassword: _celebrate.Joi.string().invalid("").required()
    }
  },
  reset: {
    body: {
      confirmPassword: _celebrate.Joi.string().required(),
      password: _celebrate.Joi.string().min(6).max(255).invalid("").required()
    }
  },
  createAcc: {
    body: {
      accountType: _celebrate.Joi.string().required()
    }
  },
  deposit: {
    body: {
      Amount: _celebrate.Joi.string().required()
    }
  },
  transfer: {
    body: {
      amount: _celebrate.Joi.string().required(),
      accountNumber: _celebrate.Joi.string().required()
    }
  }
};
var _default = userValidation;
exports["default"] = _default;