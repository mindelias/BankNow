"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@babel/polyfill");

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _config = _interopRequireDefault(require("./config"));

var error = _interopRequireWildcard(require("./config/error"));

var _routes = _interopRequireDefault(require("../server/routes/"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

if (_config["default"].env === "development") {
  app.use((0, _morgan["default"])("dev"));
}

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])()); // when a random route is inputed

app.get("/", function (_req, res) {
  return res.status(200).json({
    statusCode: 200,
    status: "success",
    message: "Welcome to BankNow API."
  });
}); // catch 404 and forward to error handler
// app.use(function(_req, _res, next) {
//   next(createError(404));
// });
// mount all routes on root /api/v1 path

app.use("/api/v1", _routes["default"]); // if error is not an instanceOf APIError, convert it.

app.use(error.converter); // catch 404 and forward to error handler

app.use(error.notFound); // error handler, send stacktrace only during development

app.use(error.handler); // // error handler

app.use(function (err, req, res, _next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render("error");
});
var _default = app;
exports["default"] = _default;