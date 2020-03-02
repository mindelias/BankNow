"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * @param {Number} statusCode - status code of the response
 * @param {string} message - message identify the code
 * @param {{}} payload - response object
 * @param {Error} error - error message
 * @param {Token} token - jwt token
 * @returns {{}}
 */
var APIresponse = function APIresponse(statusCode, message, payload, errors) {
  return {
    statusCode: statusCode,
    message: message,
    payload: payload,
    errors: errors
  };
};

var _default = APIresponse;
exports["default"] = _default;