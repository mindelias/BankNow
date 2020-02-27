import db from "../src/models";
import sendResponse from "../helpers/response";
import { hashPassword, comparePassword } from "../services/bcrypt.service";
import * as tokenizer from "../services/auth.service";
import httpStatus from "http-status";

export const createUser = async (req, res, next) => {
  let { email, fullName, phoneNumber, password } = req.body;
  try {
    const hashedpassword = await hashPassword(password);
    password = hashedpassword;

    let user = await db.User.create({ email, fullName, phoneNumber, password });

    const payLoad = { id: user.id, email }; // when loggin in a user
    const token = tokenizer.issue(payLoad);
    user = { user, token };
    return res
      .status(httpStatus.CREATED)
      .json(sendResponse(httpStatus.CREATED, "success", user, null));
  } catch (error) {
    next(error);
  }
};
 // Get Validated Users
export async function getLoggedUsers(req, res, next) {
  try {
    const user = await db.User.findOne({ where: { id:req.token.id } });
  return res
  .status(httpStatus.OK)
  .json(sendResponse(httpStatus.OK, "success", user, null));
    
  } catch (error) {
    next(error)
  }
 
  
}

export const loginUser = async (req, res, next) => {
  let { email } = req.body;
  let user;

  try {
    const userExist = await db.User.findOne({ where: { email: email } });

    const payLoad = { id: userExist.id, email: email }; // when loggin in a user
    const token = tokenizer.issue(payLoad);
    user = { userExist, token };
    return res
      .status(httpStatus.CREATED)
      .json(sendResponse(httpStatus.OK, "success", user, null));
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const foundUser = await db.User.findOne({ where: { id: req.token.id } });
    const hash = foundUser.password;
    let { oldPassword, newPassword, confirmPassword } = req.body;

    if ((await comparePassword(oldPassword, hash)) === true) {
      if (oldPassword == newPassword) {
        return res
          .status(httpStatus.UNPROCESSABLE_ENTITY)
          .json(
            sendResponse(
              httpStatus.UNPROCESSABLE_ENTITY,
              "error",
              null,
              "You cannot use the same password as the old one"
            )
          );
      }

      if (newPassword !== confirmPassword) {
        return res
          .status(httpStatus.UNPROCESSABLE_ENTITY)
          .json(
            sendResponse(
              httpStatus.UNPROCESSABLE_ENTITY,
              "error",
              null,
              "Passwords do not match"
            )
          );
      }

      newPassword = await hashPassword(newPassword);

      await db.User.update(
        { password: newPassword },
        { where: { id: req.token.id } }
      );

      return res
        .status(httpStatus.OK)
        .json(
          sendResponse(
            httpStatus.OK,
            "Password sucessfully changed",
            null,
            null
          )
        );
    }

    return res
      .status(httpStatus.UNAUTHORIZED)
      .json(
        sendResponse(
          httpStatus.UNAUTHORIZED,
          "error",
          null,
          "Check your password and try again"
        )
      );
  } catch (error) {
    next(error);
  }
};
