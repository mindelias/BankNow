import jwt from "jsonwebtoken";
import config from "../config";

export const issue = payload =>
  jwt.sign(payload, config.jwtSecret, { expiresIn: 86400 });

export const issue2 = (payload, jwtSecret) =>
  jwt.sign(payload, jwtSecret, { expiresIn: 3600 });

export const verify = (token, cb) => jwt.verify(token, config.jwtSecret, cb);
