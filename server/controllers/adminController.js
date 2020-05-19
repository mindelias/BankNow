import db from "../src/models";
import sendResponse from "../helpers/response";
import httpStatus from "http-status";

export async function getAllUsersDetails(req, res, next) {
  try {
    const users = await db.User.findAll({include: [{model: db.Account}]});
    res.json(users)
  } catch (error) {
    next(error);
  }
}
