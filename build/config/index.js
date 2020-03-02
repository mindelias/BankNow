"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _celebrate = require("celebrate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config(); // define validation for all env variables


var envVarsSchema = _celebrate.Joi.object({
  PORT: _celebrate.Joi.string()["default"]("3000"),
  NODE_ENV: _celebrate.Joi.string().valid("development", "production", "test")["default"]("development"),
  DB_HOST: _celebrate.Joi.string().required()["default"]("psotgres://localhost").description("Database host name"),
  DB_PASS: _celebrate.Joi.string().required().description("Database password"),
  DB_USER: _celebrate.Joi.string().required().description("Database password"),
  BCRYPT_ROUND: _celebrate.Joi.number().required().description("bcrypt password hash"),
  JWT_SECRET: _celebrate.Joi.string().required().description("JWT required to sign token")
}).unknown().required();

var _envVarsSchema$valida = envVarsSchema.validate(process.env),
    error = _envVarsSchema$valida.error,
    envVars = _envVarsSchema$valida.value;

if (error) {
  throw new Error("Config validation error: ".concat(error.message));
}

var config = {
  env: envVars.NODE_ENV,
  host: envVars.HOST,
  port: envVars.PORT,
  jwtSecret: envVars.JWT_SECRET,
  bcryptSalt: envVars.BCRYPT_ROUND // dbURI:
  //   process.env.NODE_ENV === "test"
  //     ? envVars.MONGO_HOST_TEST
  //     : envVars.MONGO_HOST

};
var _default = config;
exports["default"] = _default;