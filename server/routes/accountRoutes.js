import { Router } from "express";
import { auth } from "../policies/auth.policy";
import { celebrate as validate } from "celebrate";
import paramsValidation from "../validations/auth.validation";

import * as accountController from "../controllers/accountController";

const router = Router();

router
  .route("/")
  .post(
    auth,
    validate(paramsValidation.createAcc, { abortEarly: false }),
    accountController.creatAccount
  );

router.route("/").get(auth, accountController.getAccounDetails);

router
  .route("/deposit")
  .post(
    auth,
    validate(paramsValidation.deposit, { abortEarly: false }),
    accountController.deposit
  );
router
  .route("/withdraw")
  .post(
    auth,
    validate(paramsValidation.deposit, { abortEarly: false }),
    accountController.withdraw
  );
router
  .route("/transfer")
  .post(
    auth,
    validate(paramsValidation.transfer, { abortEarly: false }),
    accountController.transfer
  );

router.route("/transactions").get(auth, accountController.getTransaction);
export default router;
