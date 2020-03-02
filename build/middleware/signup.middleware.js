"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../src/models"));

var _response = _interopRequireDefault(require("../helpers/response"));

var _httpStatus = _interopRequireDefault(require("http-status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signUpMiddleware =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, email, phoneNumber, password, confirmPassword, errors, emailExists, phoneNumberExists;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, phoneNumber = _req$body.phoneNumber, password = _req$body.password, confirmPassword = _req$body.confirmPassword;
            errors = {};

            if (password !== confirmPassword) {
              errors["password"] = "password does not match";
            }

            _context.next = 5;
            return _models["default"].User.findOne({
              where: {
                email: email
              }
            });

          case 5:
            emailExists = _context.sent;
            _context.next = 8;
            return _models["default"].User.findOne({
              where: {
                phoneNumber: phoneNumber
              }
            });

          case 8:
            phoneNumberExists = _context.sent;

            if (emailExists || phoneNumberExists) {
              errors["issue"] = "Email or Phone number already exists";
            }

            if (!Object.keys(errors).length) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.status(_httpStatus["default"].BAD_REQUEST).json((0, _response["default"])(_httpStatus["default"].BAD_REQUEST, "invalid credentials", null, errors)));

          case 12:
            next();

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signUpMiddleware(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = signUpMiddleware;
exports["default"] = _default;