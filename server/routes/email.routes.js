import { Router } from "express";
import { celebrate as validate } from "celebrate";
import * as emailController from "../controllers/email.controller";
import paramsValidation from "../validations/auth.validation";

const emailRouter = Router();

emailRouter.route("/user/:email").post(emailController.sendPasswordResetEmail);

emailRouter
  .route("/receive_new_password/:userId/:token")
  .post(
    validate(paramsValidation.reset, { abortEarly: false }),
    emailController.receiveNewPassword
  );

 
export default emailRouter