"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _celebrate = require("celebrate");

var _auth = _interopRequireDefault(require("../validations/auth.validation"));

var _signup = _interopRequireDefault(require("../middleware/signup.middleware"));

var _signin = _interopRequireDefault(require("../middleware/signin.middleware"));

var authController = _interopRequireWildcard(require("../controllers/auth.controller"));

var _auth3 = require("../policies/auth.policy");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var router = (0, _express.Router)();
router.route("/signup").post((0, _celebrate.celebrate)(_auth["default"].signUp, {
  abortEarly: false
}), _signup["default"], authController.createUser);
router.route("/signin").post((0, _celebrate.celebrate)(_auth["default"].signIn, {
  abortEarly: false
}), _signin["default"], authController.loginUser);
router.route("/signin").get(_auth3.auth, authController.getLoggedUsers);
router.route("/changePassword").patch(_auth3.auth, (0, _celebrate.celebrate)(_auth["default"].Update, {
  abortEarly: false
}), authController.changePassword);
var _default = router;
exports["default"] = _default;