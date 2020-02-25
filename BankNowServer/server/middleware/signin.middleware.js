import db from "../src/models";
import sendResponse from "../helpers/response";
import httpStatus from "http-status";
import { comparePassword } from "../services/bcrypt.service";

const signInMiddleware = async (req, res, next) => {
  const { email, password } = req.body;
  const errors = {};

  const emailExists = await db.User.findOne({ where: { email: email } });

  if (!emailExists) {
    errors["issue"] = "User not found";
  }

  const isMatch = await comparePassword(password, emailExists.password);
  if (!isMatch) {
    errors["password"] = "incorrect Password";
  }

  if (Object.keys(errors).length) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json(
        sendResponse(
          httpStatus.BAD_REQUEST,
          "invalid credentials",
          null,
          errors
        )
      );
  }

  next();
};

export default signInMiddleware;
