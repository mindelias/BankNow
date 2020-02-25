import dotenv from "dotenv";
import { Joi } from "celebrate";
dotenv.config();

// define validation for all env variables
const envVarsSchema = Joi.object({
  PORT: Joi.string().default("3000"),
  NODE_ENV: Joi.string()
    .valid("development", "production", "test")
    .default("development"),
  DB_HOST: Joi.string()
    .required()
    .default("psotgres://localhost")
    .description("Database host name"),
  DB_PASS: Joi.string()
    .required()
    .description("Database password"),
  DB_USER: Joi.string()
    .required()
    .description("Database password"),
  BCRYPT_ROUND: Joi.number()
    .required()
    .description("bcrypt password hash"),
  JWT_SECRET: Joi.string()
    .required()
    .description("JWT required to sign token")
})
  .unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  host: envVars.HOST,
  port: envVars.PORT,
  jwtSecret: envVars.JWT_SECRET,
  bcryptSalt: envVars.BCRYPT_ROUND,
  // dbURI:
  //   process.env.NODE_ENV === "test"
  //     ? envVars.MONGO_HOST_TEST
  //     : envVars.MONGO_HOST
};

export default config;
