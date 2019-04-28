import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePwd
} from "../controllers/userController";
const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePwd, changePwd);

export default userRouter;

// M Model: data
// V View: how does the data look
// C Control: function that looks for the data
