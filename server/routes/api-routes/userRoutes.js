import express from "express"
import userController from "../../controllers/userController.js"
import passport from "passport"
import jwt from "jsonwebtoken"

const router = express.Router();

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  userController.signUp
);

router.post("/login", userController.login);

export default router
