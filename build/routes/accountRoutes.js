"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../policies/auth.policy");

var _celebrate = require("celebrate");

var _auth2 = _interopRequireDefault(require("../validations/auth.validation"));

var accountController = _interopRequireWildcard(require("../controllers/accountController"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.route("/").post(_auth.auth, (0, _celebrate.celebrate)(_auth2["default"].createAcc, {
  abortEarly: false
}), accountController.creatAccount);
router.route("/").get(_auth.auth, accountController.getAccounDetails);
router.route("/deposit").post(_auth.auth, (0, _celebrate.celebrate)(_auth2["default"].deposit, {
  abortEarly: false
}), accountController.deposit);
router.route("/withdraw").post(_auth.auth, (0, _celebrate.celebrate)(_auth2["default"].deposit, {
  abortEarly: false
}), accountController.withdraw);
router.route("/transfer").post(_auth.auth, (0, _celebrate.celebrate)(_auth2["default"].transfer, {
  abortEarly: false
}), accountController.transfer);
router.route("/transactions").get(_auth.auth, accountController.getTransaction);
var _default = router;
exports["default"] = _default;