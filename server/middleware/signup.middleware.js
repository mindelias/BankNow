import db from "../src/models";
import sendResponse from "../helpers/response";
import httpStatus from "http-status";

const signUpMiddleware = async (req, res, next) => {
  const { email, phoneNumber, password, confirmPassword } = req.body;
  const errors = {};

  if (password !== confirmPassword) {
    errors["password"] = "password does not match";
  }

  const emailExists = await db.User.findOne({ where: { email: email } });
  const phoneNumberExists = await db.User.findOne({
    where: { phoneNumber: phoneNumber }
  });

  if (emailExists || phoneNumberExists) {
    errors["issue"] = "Email or Phone number already exists";
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

export default signUpMiddleware;
