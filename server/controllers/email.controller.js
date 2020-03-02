import db from "../src/models";
import sendResponse from "../helpers/response";
import { hashPassword } from "../services/bcrypt.service";
import jwt from "jsonwebtoken";
import * as tokenizer from "../services/auth.service";
import httpStatus from "http-status";
import {
  transporter,
  getPasswordResetURL,
  resetPasswordTemplate
} from "../services/email.services";

// `secret` is passwordHash concatenated with user's createdAt,

export const usePasswordHashToMakeToken = ({
  password: passwordHash,
  id: userId,
  createdAt
}) => {
  const secret = passwordHash + "-" + createdAt;
  const token = tokenizer.issue2({ userId }, secret);

  return token;
};

export async function sendPasswordResetEmail(req, res) {
  const { email } = req.params;
  let user;
  let errors = {};

  try {
    user = await db.User.findOne({ where: { email: email } });
  } catch (err) {
    return res
      .status(httpStatus.UNPROCESSABLE_ENTITY)
      .json(
        sendResponse(
          httpStatus.UNPROCESSABLE_ENTITY,
          "error",
          null,
          "No user with that email"
        )
      );
  }

  const token = usePasswordHashToMakeToken(user);
  const url = getPasswordResetURL(user, token);
  const emailTemplate = resetPasswordTemplate(user, url);

  transporter.sendMail(emailTemplate, (err, info) => {
    if (err) {
      res
      .status(httpStatus.UNPROCESSABLE_ENTITY)
      .json(
        sendResponse(
          httpStatus.UNPROCESSABLE_ENTITY,
          "error",
          null,
          "an error occured while sending the mail"
        )
      );
    }

    return res
    .status(httpStatus.OK)
    .json(
      sendResponse(
        httpStatus.OK,
        null,
        null,
        "message has been sent"
      )
    );
  });
}

export const receiveNewPassword = async (req, res, next) => {
  try {
    let hashedpassword;
    const { userId, token } = req.params;
    const { password, confirmPassword } = req.body;
    const user = await db.User.findOne({ where: { id: userId } });
    const secret = user.password + "-" + user.createdAt;
    const payload = jwt.decode(token, secret);

    if (payload.userId !== user.id) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .json(
          sendResponse(
            httpStatus.UNPROCESSABLE_ENTITY,
            "error",
            null,
            "Invalid credential"
          )
        );
    }

    if (password !== confirmPassword) {
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
    hashedpassword = await hashPassword(password);
    await db.User.update(
      { password: hashedpassword },
      { where: { id: user.id } }
    );

    return res
      .status(httpStatus.OK)
      .json(
        sendResponse(httpStatus.OK, "Password change accepted", null, null)
      );
  } catch (error) {
    next(error);
  }
};
