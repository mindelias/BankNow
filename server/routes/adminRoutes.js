import { Router } from "express";
import checkIfAdmin from "../middleware/admin.middleware";
import * as adminController from "../controllers/adminController";
import {auth} from '../policies/auth.policy'

const router = Router();


router.route("/").get(auth, checkIfAdmin, adminController.getAllUsersDetails);
export default router;