"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Returns a custom error object with descriptive messages.
 * @property {Array} arr - Array of Joi validation errors.
 * @returns {Object}
 */
var JoiErrorFormatter = function JoiErrorFormatter(errors) {
  return errors.reduce(function (errMessage, _ref) {
    var path = _ref.path,
        message = _ref.message;

    var _path = _slicedToArray(path, 1),
        key = _path[0];

    if (!errMessage[key]) {
      errMessage[key] = message.replace(/["']/g, "");
    }

    return errMessage;
  }, {});
};

var _default = JoiErrorFormatter;
exports["default"] = _default;