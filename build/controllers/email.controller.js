"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendPasswordResetEmail = sendPasswordResetEmail;
exports.receiveNewPassword = exports.usePasswordHashToMakeToken = void 0;

var _models = _interopRequireDefault(require("../src/models"));

var _response = _interopRequireDefault(require("../helpers/response"));

var _bcrypt = require("../services/bcrypt.service");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var tokenizer = _interopRequireWildcard(require("../services/auth.service"));

var _httpStatus = _interopRequireDefault(require("http-status"));

var _email = require("../services/email.services");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// `secret` is passwordHash concatenated with user's createdAt,
var usePasswordHashToMakeToken = function usePasswordHashToMakeToken(_ref) {
  var passwordHash = _ref.password,
      userId = _ref.id,
      createdAt = _ref.createdAt;
  var secret = passwordHash + "-" + createdAt;
  var token = tokenizer.issue2({
    userId: userId
  }, secret);
  return token;
};

exports.usePasswordHashToMakeToken = usePasswordHashToMakeToken;

function sendPasswordResetEmail(_x, _x2) {
  return _sendPasswordResetEmail.apply(this, arguments);
}

function _sendPasswordResetEmail() {
  _sendPasswordResetEmail = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var email, user, errors, token, url, emailTemplate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = req.params.email;
            errors = {};
            _context2.prev = 2;
            _context2.next = 5;
            return _models["default"].User.findOne({
              where: {
                email: email
              }
            });

          case 5:
            user = _context2.sent;
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](2);
            return _context2.abrupt("return", res.status(_httpStatus["default"].UNPROCESSABLE_ENTITY).json((0, _response["default"])(_httpStatus["default"].UNPROCESSABLE_ENTITY, "error", null, "No user with that email")));

          case 11:
            token = usePasswordHashToMakeToken(user);
            url = (0, _email.getPasswordResetURL)(user, token);
            emailTemplate = (0, _email.resetPasswordTemplate)(user, url);

            _email.transporter.sendMail(emailTemplate, function (err, info) {
              if (err) {
                res.status(_httpStatus["default"].UNPROCESSABLE_ENTITY).json((0, _response["default"])(_httpStatus["default"].UNPROCESSABLE_ENTITY, "error", null, "an error occured while sending the mail"));
              }

              return res.status(_httpStatus["default"].OK).json((0, _response["default"])(_httpStatus["default"].OK, null, null, "message has been sent"));
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 8]]);
  }));
  return _sendPasswordResetEmail.apply(this, arguments);
}

var receiveNewPassword =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var hashedpassword, _req$params, userId, token, _req$body, password, confirmPassword, user, secret, payload;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$params = req.params, userId = _req$params.userId, token = _req$params.token;
            _req$body = req.body, password = _req$body.password, confirmPassword = _req$body.confirmPassword;
            _context.next = 5;
            return _models["default"].User.findOne({
              where: {
                id: userId
              }
            });

          case 5:
            user = _context.sent;
            secret = user.password + "-" + user.createdAt;
            payload = _jsonwebtoken["default"].decode(token, secret);

            if (!(payload.userId !== user.id)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(_httpStatus["default"].UNPROCESSABLE_ENTITY).json((0, _response["default"])(_httpStatus["default"].UNPROCESSABLE_ENTITY, "error", null, "Invalid credential")));

          case 10:
            if (!(password !== confirmPassword)) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.status(_httpStatus["default"].UNPROCESSABLE_ENTITY).json((0, _response["default"])(_httpStatus["default"].UNPROCESSABLE_ENTITY, "error", null, "Passwords do not match")));

          case 12:
            _context.next = 14;
            return (0, _bcrypt.hashPassword)(password);

          case 14:
            hashedpassword = _context.sent;
            _context.next = 17;
            return _models["default"].User.update({
              password: hashedpassword
            }, {
              where: {
                id: user.id
              }
            });

          case 17:
            return _context.abrupt("return", res.status(_httpStatus["default"].OK).json((0, _response["default"])(_httpStatus["default"].OK, "Password change accepted", null, null)));

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 20]]);
  }));

  return function receiveNewPassword(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.receiveNewPassword = receiveNewPassword;