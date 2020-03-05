import db from "../src/models";
import sendResponse from "../helpers/response";
import httpStatus from "http-status";
import { comparePassword } from "../services/bcrypt.service";


const signInMiddleware = async (req, res, next) => {
  const { email, password } = req.body;
  
   
  
let isMatch;
  const emailExists = await db.User.findOne({ where: { email: email } });
  if(emailExists){
    isMatch = await comparePassword(password, emailExists.password);

  }

  if (!emailExists || !isMatch) {
    return res.status(400).json({error: 'email or password is incorrect'})
  }

  // if (!isMatch) {
  //   return res.status(400).json({error: 'email or password is not correct'})
  // }

  // if (Object.keys(errors).length) {
  //   return res
  //     .status(httpStatus.BAD_REQUEST)
  //     .json(
  //       sendResponse(
  //         httpStatus.BAD_REQUEST,
  //         "invalid credentials",
  //         null,
  //         errors
  //       )
  //     );
  // }

  next();
};

export default signInMiddleware;
