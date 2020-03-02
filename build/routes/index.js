"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("../routes/auth.routes"));

var _email = _interopRequireDefault(require("../routes/email.routes"));

var _accountRoutes = _interopRequireDefault(require("../routes/accountRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
/** GET /health-check - Check service health */

router.get("/health-check", function (_req, res) {
  return res.send({
    check: "banknow server started ok"
  });
});
router.use("/auth", _auth["default"]);
router.use("/reset", _email["default"]);
router.use("/account", _accountRoutes["default"]);
var _default = router;
exports["default"] = _default;