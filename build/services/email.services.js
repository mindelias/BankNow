"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPasswordTemplate = exports.getPasswordResetURL = exports.transporter = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var transporter = _nodemailer["default"].createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_LOGIN,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

exports.transporter = transporter;

var getPasswordResetURL = function getPasswordResetURL(user, token) {
  return "http://localhost:3000/password/reset/".concat(user.id, "/").concat(token);
}; // function that handles html template


exports.getPasswordResetURL = getPasswordResetURL;

var resetPasswordTemplate = function resetPasswordTemplate(user, url) {
  var from = process.env.EMAIL_LOGIN;
  var to = user.email;
  var subject = "🌻 BankNow Password Reset 🌻";
  var html = "\n  <p>Hey ".concat(user.fullName || user.email, ",</p>\n  <p>We heard that you lost your Backnow password. Sorry about that!</p>\n  <p>But don\u2019t worry! You can use the following link to reset your password:</p>\n  <a href=").concat(url, ">").concat(url, "</a>\n  <p>If you don\u2019t use this link within 1 hour, it will expire.</p>\n  <p>Do something outside today! </p>\n  <p>\u2013Your friends at Backwoods</p>\n  ");
  return {
    from: from,
    to: to,
    subject: subject,
    html: html
  };
};

exports.resetPasswordTemplate = resetPasswordTemplate;