import bcrypt from "bcryptjs";
import config from "../config";

export const hashPassword = password => {
  const hash = bcrypt.genSaltSync(config.bcryptSalt);
  return bcrypt.hash(password, hash);
};

export const comparePassword = (password, hash) =>
  bcrypt.compare(password, hash);
