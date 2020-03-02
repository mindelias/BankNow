"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparePassword = exports.hashPassword = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hashPassword = function hashPassword(password) {
  var hash = _bcryptjs["default"].genSaltSync(_config["default"].bcryptSalt);

  return _bcryptjs["default"].hash(password, hash);
};

exports.hashPassword = hashPassword;

var comparePassword = function comparePassword(password, hash) {
  return _bcryptjs["default"].compare(password, hash);
};

exports.comparePassword = comparePassword;