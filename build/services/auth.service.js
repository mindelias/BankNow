"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verify = exports.issue2 = exports.issue = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var issue = function issue(payload) {
  return _jsonwebtoken["default"].sign(payload, _config["default"].jwtSecret, {
    expiresIn: 86400
  });
};

exports.issue = issue;

var issue2 = function issue2(payload, jwtSecret) {
  return _jsonwebtoken["default"].sign(payload, jwtSecret, {
    expiresIn: 3600
  });
};

exports.issue2 = issue2;

var verify = function verify(token, cb) {
  return _jsonwebtoken["default"].verify(token, _config["default"].jwtSecret, cb);
};

exports.verify = verify;