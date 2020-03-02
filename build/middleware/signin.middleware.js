"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../src/models"));

var _response = _interopRequireDefault(require("../helpers/response"));

var _httpStatus = _interopRequireDefault(require("http-status"));

var _bcrypt = require("../services/bcrypt.service");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signInMiddleware =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, email, password, isMatch, emailExists;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.next = 3;
            return _models["default"].User.findOne({
              where: {
                email: email
              }
            });

          case 3:
            emailExists = _context.sent;

            if (!emailExists) {
              _context.next = 8;
              break;
            }

            _context.next = 7;
            return (0, _bcrypt.comparePassword)(password, emailExists.password);

          case 7:
            isMatch = _context.sent;

          case 8:
            if (!(!emailExists || !isMatch)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              error: 'email or password is incorrect'
            }));

          case 10:
            // if (!isMatch) {
            //   return res.status(400).json({error: 'email or password is not correct'})
            // }
            // if (Object.keys(errors).length) {
            //   return res
            //     .status(httpStatus.BAD_REQUEST)
            //     .json(
            //       sendResponse(
            //         httpStatus.BAD_REQUEST,
            //         "invalid credentials",
            //         null,
            //         errors
            //       )
            //     );
            // }
            next();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signInMiddleware(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = signInMiddleware;
exports["default"] = _default;