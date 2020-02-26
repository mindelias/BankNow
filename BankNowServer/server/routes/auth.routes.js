import { Router } from "express";
import jwt from 'jsonwebtoken'
import { celebrate as validate } from "celebrate";
import paramsValidation from "../validations/auth.validation";
import userValidation from "../middleware/signup.middleware";
import userValidationLogin from "../middleware/signin.middleware";
import * as authController from "../controllers/auth.controller";
import { auth } from "../policies/auth.policy";
import dotenv from 'dotenv'

dotenv.config()
const router = Router();

router
  .route("/signup")
  .post(
    validate(paramsValidation.signUp, { abortEarly: false }),
    userValidation,
    authController.createUser
  );

router
  .route("/signin")
  .post(
    validate(paramsValidation.signIn, { abortEarly: false }),
    userValidationLogin,
    authController.loginUser
  );

   

  router.route("/signin").get(auth, authController.getLoggedUsers
    // const header=  req.header("Authorization")
    // const token = jwt.verify(header, process.env.JWT_SECRET,(err, decode) =>{
    //   return decode
    // }); 
    // console.log(token)
    // try {
    //   const data = await authController.getLoggedUsers(token);
    //   res.status(200).json({ data });
    // } catch (error) {
    //   console.log(error);
      
    //   res.status(500).send("internal server  error noticed by Aminat");
    // }
  );

router
  .route("/changePassword")
  .patch(
    auth,
    validate(paramsValidation.Update, { abortEarly: false }),
    authController.changePassword
  );
export default router;
