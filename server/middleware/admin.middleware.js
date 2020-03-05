import db from "../src/models";
import sendResponse from "../helpers/response";
import httpStatus from "http-status";

export const checkIfAdmin = async (req, res, next) => {
  const userExist = await db.User.findOne({ where: { id: req.token.id } });
  if (userExist && userExist.userType == "admin") {
    return next();
  }

  return res.status(401).json(
    sendResponse(httpStatus.UNAUTHORIZED, "error", null, {
      error: "you must be an admin to navigate this route"
    })
  );
};
