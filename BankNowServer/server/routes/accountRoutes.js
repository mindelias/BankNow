import { Router } from "express";
import {auth} from '../policies/auth.policy'


// import { celebrate as validate } from "celebrate";
// import paramsValidation from "../validations/auth.validation";

import * as accountController from "../controllers/accountController";

const router = Router();

router.route("/").post(auth,
  accountController.creatAccount
);
router.route("/deposit").post(auth,
  accountController.deposit
);
router.route("/withdraw").post(auth,
  accountController.withdraw
);
router.route("/transfer").post(auth,
  accountController.transfer
);

export default router;
