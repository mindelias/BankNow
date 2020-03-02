"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = void 0;

var _httpStatus = _interopRequireDefault(require("http-status"));

var _auth = require("../services/auth.service");

var _response = _interopRequireDefault(require("../helpers/response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var auth = function auth(req, res, next) {
  var tokenToVerify;
  var signature = req.header("Authorization");
  var content = signature ? signature.split(" ") : false;

  if (content && content.length === 2 && content[0] === "Bearer") {
    tokenToVerify = content[1];
  } else if (req.body.token) {
    tokenToVerify = req.body.token;
    delete req.body.token;
  }

  if (tokenToVerify) {
    return (0, _auth.verify)(tokenToVerify, function (err, thisToken) {
      if (err) {
        return res.status(401).json((0, _response["default"])(_httpStatus["default"].UNAUTHORIZED, "Invalid Token", null, {
          error: "Invalid Token"
        }));
      }

      req.token = thisToken;
      return next();
    });
  }

  return res.status(401).json((0, _response["default"])(_httpStatus["default"].UNAUTHORIZED, "No Token found", null, {
    error: "No Authorization found"
  }));
};

exports.auth = auth;