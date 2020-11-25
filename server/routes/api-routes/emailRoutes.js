const router = require("express").Router();
const emailController = require("../../controllers/emailController");
router.get("/", emailController.getEmails);
router.post("/", emailController.createEmail);
router.delete("/:id", emailController.deleteEmailById);
module.exports = router;
