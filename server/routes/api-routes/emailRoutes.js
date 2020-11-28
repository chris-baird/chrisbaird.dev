const router = require("express").Router();
const passport = require("passport");

const emailController = require("../../controllers/emailController");
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
module.exports = router;
