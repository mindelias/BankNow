"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLoggedUsers = getLoggedUsers;
exports.changePassword = exports.loginUser = exports.createUser = void 0;

var _models = _interopRequireDefault(require("../src/models"));

var _response = _interopRequireDefault(require("../helpers/response"));

var _bcrypt = require("../services/bcrypt.service");

var tokenizer = _interopRequireWildcard(require("../services/auth.service"));

var _httpStatus = _interopRequireDefault(require("http-status"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createUser =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, email, fullName, phoneNumber, password, hashedpassword, user, payLoad, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, fullName = _req$body.fullName, phoneNumber = _req$body.phoneNumber, password = _req$body.password;
            _context.prev = 1;
            _context.next = 4;
            return (0, _bcrypt.hashPassword)(password);

          case 4:
            hashedpassword = _context.sent;
            password = hashedpassword;
            _context.next = 8;
            return _models["default"].User.create({
              email: email,
              fullName: fullName,
              phoneNumber: phoneNumber,
              password: password
            });

          case 8:
            user = _context.sent;
            payLoad = {
              id: user.id,
              email: email
            }; // when loggin in a user

            token = tokenizer.issue(payLoad);
            user = {
              user: user,
              token: token
            };
            return _context.abrupt("return", res.status(_httpStatus["default"].CREATED).json((0, _response["default"])(_httpStatus["default"].CREATED, "success", user, null)));

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](1);
            next(_context.t0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 15]]);
  }));

  return function createUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // Get Validated Users


exports.createUser = createUser;

function getLoggedUsers(_x4, _x5, _x6) {
  return _getLoggedUsers.apply(this, arguments);
}

function _getLoggedUsers() {
  _getLoggedUsers = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res, next) {
    var user;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _models["default"].User.findOne({
              where: {
                id: req.token.id
              }
            });

          case 3:
            user = _context4.sent;
            return _context4.abrupt("return", res.status(_httpStatus["default"].OK).json((0, _response["default"])(_httpStatus["default"].OK, "success", user, null)));

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            next(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return _getLoggedUsers.apply(this, arguments);
}

var loginUser =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    var email, user, userExist, payLoad, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('hi');
            email = req.body.email;
            _context2.prev = 2;
            _context2.next = 5;
            return _models["default"].User.findOne({
              where: {
                email: email
              }
            });

          case 5:
            userExist = _context2.sent;
            payLoad = {
              id: userExist.id,
              email: email
            }; // when loggin in a user

            token = tokenizer.issue(payLoad);
            user = {
              userExist: userExist,
              token: token
            };
            return _context2.abrupt("return", res.status(_httpStatus["default"].CREATED).json((0, _response["default"])(_httpStatus["default"].OK, "success", user, null)));

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](2);
            next(_context2.t0);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 12]]);
  }));

  return function loginUser(_x7, _x8, _x9) {
    return _ref2.apply(this, arguments);
  };
}();

exports.loginUser = loginUser;

var changePassword =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res, next) {
    var foundUser, hash, _req$body2, oldPassword, newPassword, confirmPassword;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _models["default"].User.findOne({
              where: {
                id: req.token.id
              }
            });

          case 3:
            foundUser = _context3.sent;
            hash = foundUser.password;
            _req$body2 = req.body, oldPassword = _req$body2.oldPassword, newPassword = _req$body2.newPassword, confirmPassword = _req$body2.confirmPassword;
            _context3.next = 8;
            return (0, _bcrypt.comparePassword)(oldPassword, hash);

          case 8:
            _context3.t0 = _context3.sent;

            if (!(_context3.t0 === true)) {
              _context3.next = 20;
              break;
            }

            if (!(oldPassword == newPassword)) {
              _context3.next = 12;
              break;
            }

            return _context3.abrupt("return", res.status(_httpStatus["default"].UNPROCESSABLE_ENTITY).json((0, _response["default"])(_httpStatus["default"].UNPROCESSABLE_ENTITY, "error", null, "You cannot use the same password as the old one")));

          case 12:
            if (!(newPassword !== confirmPassword)) {
              _context3.next = 14;
              break;
            }

            return _context3.abrupt("return", res.status(_httpStatus["default"].UNPROCESSABLE_ENTITY).json((0, _response["default"])(_httpStatus["default"].UNPROCESSABLE_ENTITY, "error", null, "Passwords do not match")));

          case 14:
            _context3.next = 16;
            return (0, _bcrypt.hashPassword)(newPassword);

          case 16:
            newPassword = _context3.sent;
            _context3.next = 19;
            return _models["default"].User.update({
              password: newPassword
            }, {
              where: {
                id: req.token.id
              }
            });

          case 19:
            return _context3.abrupt("return", res.status(_httpStatus["default"].OK).json((0, _response["default"])(_httpStatus["default"].OK, "Password sucessfully changed", null, null)));

          case 20:
            return _context3.abrupt("return", res.status(_httpStatus["default"].UNAUTHORIZED).json((0, _response["default"])(_httpStatus["default"].UNAUTHORIZED, "error", null, "Check your password and try again")));

          case 23:
            _context3.prev = 23;
            _context3.t1 = _context3["catch"](0);
            next(_context3.t1);

          case 26:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 23]]);
  }));

  return function changePassword(_x10, _x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();

exports.changePassword = changePassword;