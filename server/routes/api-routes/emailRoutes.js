import express from "express"
import passport from "passport"
import emailController from "../../controllers/emailController.js"
const router = express.Router()

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  emailController.getEmails
);
router.post("/", emailController.createEmail);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  emailController.deleteEmailById
);
export default router;
