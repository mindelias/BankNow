"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccounDetails = getAccounDetails;
exports.getTransaction = getTransaction;
exports.transfer = exports.withdraw = exports.deposit = exports.creatAccount = void 0;

var _models = _interopRequireDefault(require("../src/models"));

var _response = _interopRequireDefault(require("../helpers/response"));

var tokenizer = _interopRequireWildcard(require("../services/auth.service"));

var _httpStatus = _interopRequireDefault(require("http-status"));

var _uuid = require("uuid");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var creatAccount =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var accountType, userId, accountBalance, uuidNumber, type, accountNumber, account;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            accountType = req.body.accountType;
            userId = req.token.id;
            accountBalance = 0.0;
            uuidNumber = (0, _uuid.v4)().split("-");
            type = accountType === "savings" ? "Sav" : "Cur";
            accountNumber = "".concat(type, "-").concat(uuidNumber[0]).concat(uuidNumber[3]); // console.log(accountNumber);

            _context.prev = 6;
            _context.next = 9;
            return _models["default"].Account.create({
              userId: userId,
              accountBalance: accountBalance,
              accountType: accountType,
              accountNumber: accountNumber
            });

          case 9:
            account = _context.sent;
            return _context.abrupt("return", res.status(_httpStatus["default"].CREATED).json((0, _response["default"])(_httpStatus["default"].OK, "success", account, null)));

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](6);
            next(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 13]]);
  }));

  return function creatAccount(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.creatAccount = creatAccount;

function getAccounDetails(_x4, _x5, _x6) {
  return _getAccounDetails.apply(this, arguments);
}

function _getAccounDetails() {
  _getAccounDetails = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res, next) {
    var user;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _models["default"].Account.findOne({
              where: {
                userId: req.token.id
              }
            });

          case 3:
            user = _context5.sent;
            return _context5.abrupt("return", res.status(_httpStatus["default"].OK).json((0, _response["default"])(_httpStatus["default"].OK, "success", user, null)));

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            next(_context5.t0);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return _getAccounDetails.apply(this, arguments);
}

var deposit =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    var Amount, userId, transactionType, _ref3, accountBalance, _accountNumber, balance, newBalance;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            Amount = req.body.Amount;
            userId = req.token.id;
            transactionType = "credit";
            _context2.prev = 3;
            _context2.next = 6;
            return _models["default"].Account.findOne({
              where: {
                userId: userId
              }
            });

          case 6:
            _ref3 = _context2.sent;
            accountBalance = _ref3.accountBalance;
            _accountNumber = _ref3.accountNumber;
            balance = accountBalance + parseFloat(Amount); // console.log(balance);

            _context2.next = 12;
            return _models["default"].Account.update({
              accountBalance: balance
            }, {
              returning: true,
              where: {
                userId: userId
              }
            });

          case 12:
            newBalance = _context2.sent;
            _context2.next = 15;
            return _models["default"].Transaction.create({
              userId: userId,
              amount: Amount,
              accountNumber: _accountNumber,
              transactionType: transactionType
            });

          case 15:
            return _context2.abrupt("return", res.status(_httpStatus["default"].CREATED).json((0, _response["default"])(_httpStatus["default"].OK, "success", newBalance, null)));

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](3);
            next(_context2.t0);

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 18]]);
  }));

  return function deposit(_x7, _x8, _x9) {
    return _ref2.apply(this, arguments);
  };
}();

exports.deposit = deposit;

var withdraw =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res, next) {
    var amount, userId, transactionType, _ref5, accountBalance, balance, newBalance;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            amount = req.body.amount;
            userId = req.token.id;
            transactionType = "debit";
            _context3.prev = 3;
            _context3.next = 6;
            return _models["default"].Account.findOne({
              where: {
                userId: userId
              }
            });

          case 6:
            _ref5 = _context3.sent;
            accountBalance = _ref5.accountBalance;

            if (!(accountBalance < amount)) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", res.status(_httpStatus["default"].BAD_REQUEST).json((0, _response["default"])(_httpStatus["default"].BAD_REQUEST, "error", null, "Insufficient Balance")));

          case 10:
            balance = accountBalance - parseFloat(amount);
            _context3.next = 13;
            return _models["default"].Account.update({
              accountBalance: balance
            }, {
              returning: true,
              where: {
                userId: userId
              }
            });

          case 13:
            newBalance = _context3.sent;
            _context3.next = 16;
            return _models["default"].Transaction.create({
              userId: userId,
              amount: amount,
              accountNumber: accountNumber,
              transactionType: transactionType
            });

          case 16:
            return _context3.abrupt("return", res.status(_httpStatus["default"].CREATED).json((0, _response["default"])(_httpStatus["default"].OK, "success", newBalance, null)));

          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](3);
            next(_context3.t0);

          case 22:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 19]]);
  }));

  return function withdraw(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.withdraw = withdraw;

var transfer =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res, next) {
    var _req$body, amount, accountNumber, payerId, transactionType, transferAccount, payerAccount, accountBalance, userId, balance, decreaseBalance, payerBalance;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, amount = _req$body.amount, accountNumber = _req$body.accountNumber;
            payerId = req.token.id;
            transactionType = "debit";
            _context4.prev = 3;
            _context4.next = 6;
            return _models["default"].Account.findOne({
              where: {
                accountNumber: accountNumber
              }
            });

          case 6:
            transferAccount = _context4.sent;
            _context4.next = 9;
            return _models["default"].Account.findOne({
              where: {
                userId: payerId
              }
            });

          case 9:
            payerAccount = _context4.sent;

            if (!(!transferAccount || !payerAccount)) {
              _context4.next = 12;
              break;
            }

            return _context4.abrupt("return", res.status(_httpStatus["default"].NOT_FOUND).json((0, _response["default"])(_httpStatus["default"].NOT_FOUND, "error", null, "Account number does not exist")));

          case 12:
            if (!(payerAccount.accountBalance < amount)) {
              _context4.next = 14;
              break;
            }

            return _context4.abrupt("return", res.status(_httpStatus["default"].BAD_REQUEST).json((0, _response["default"])(_httpStatus["default"].BAD_REQUEST, "error", null, "Insufficient Balance")));

          case 14:
            // else you can tranfer to beneficiary
            accountBalance = transferAccount.accountBalance, userId = transferAccount.userId;
            balance = accountBalance + parseFloat(amount);
            _context4.next = 18;
            return _models["default"].Account.update({
              accountBalance: balance
            }, {
              where: {
                accountNumber: accountNumber
              }
            });

          case 18:
            _context4.next = 20;
            return _models["default"].Transaction.create({
              userId: userId,
              amount: amount,
              accountNumber: accountNumber,
              transactionType: transactionType
            });

          case 20:
            // console.log(payerAccount);
            // updating payer's account by debiting the account
            decreaseBalance = payerAccount.accountBalance - parseFloat(amount);
            _context4.next = 23;
            return _models["default"].Account.update({
              accountBalance: decreaseBalance
            }, {
              returning: true,
              where: {
                userId: payerId
              }
            });

          case 23:
            payerBalance = _context4.sent;
            _context4.next = 26;
            return _models["default"].Transaction.create({
              userId: payerId,
              amount: amount,
              accountNumber: accountNumber,
              transactionType: transactionType
            });

          case 26:
            return _context4.abrupt("return", res.status(_httpStatus["default"].OK).json((0, _response["default"])(_httpStatus["default"].OK, "success", payerBalance, null)));

          case 29:
            _context4.prev = 29;
            _context4.t0 = _context4["catch"](3);
            next(_context4.t0);

          case 32:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 29]]);
  }));

  return function transfer(_x13, _x14, _x15) {
    return _ref6.apply(this, arguments);
  };
}();

exports.transfer = transfer;

function getTransaction(_x16, _x17, _x18) {
  return _getTransaction.apply(this, arguments);
}

function _getTransaction() {
  _getTransaction = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res, next) {
    var details;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _models["default"].Transaction.findAll({
              where: {
                userId: req.token.id
              }
            });

          case 3:
            details = _context6.sent;
            return _context6.abrupt("return", res.status(_httpStatus["default"].OK).json((0, _response["default"])(_httpStatus["default"].OK, "success", details, null)));

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            next(_context6.t0);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return _getTransaction.apply(this, arguments);
}