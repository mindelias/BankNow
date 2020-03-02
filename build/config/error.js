"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notFound = exports.errorHandler = exports.converter = exports.handler = void 0;

var _httpStatus = _interopRequireDefault(require("http-status"));

var _celebrate = require("celebrate");

var _index = _interopRequireDefault(require("./index"));

var _APIError = _interopRequireDefault(require("../helpers/APIError"));

var _JoiErrorFormatter = _interopRequireDefault(require("../helpers/JoiErrorFormatter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
var handler = function handler(err, _req, res, _next) {
  var response = {
    statusCode: err.status,
    message: err.message || _httpStatus["default"][err.status],
    errors: err.errors,
    payload: null,
    stack: err.stack
  };

  if (_index["default"].env !== "development") {
    delete response.stack;
  }

  res.status(err.status).json(response);
};
/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */


exports.handler = handler;

var converter = function converter(err, req, res, _next) {
  var convertedError = err;

  if ((0, _celebrate.isCelebrate)(err)) {
    convertedError = new _APIError["default"]({
      message: "Invalid fields",
      status: _httpStatus["default"].BAD_REQUEST,
      //unprocessible entity
      errors: (0, _JoiErrorFormatter["default"])(err.joi.details) || {},
      payload: {}
    });
  } else if (!(err instanceof _APIError["default"])) {
    convertedError = new _APIError["default"]({
      message: err.message,
      status: err.status,
      stack: err.stack
    });
  }

  return handler(convertedError, req, res);
};
/**
 *
 * @param {Error} err
 * @param {} req
 * @param {*} res
 */


exports.converter = converter;

var errorHandler = function errorHandler(err, req, res, next) {
  if (err) {
    var tokenError = new _APIError["default"]("Unauthorized", err.status, true);
    next(tokenError);
  }

  next();
};
/**
 * Catch 404 and forward to error handler
 * @public
 */


exports.errorHandler = errorHandler;

var notFound = function notFound(req, res) {
  var err = new _APIError["default"]({
    message: "Not found",
    status: _httpStatus["default"].NOT_FOUND
  });
  return handler(err, req, res);
};

exports.notFound = notFound;