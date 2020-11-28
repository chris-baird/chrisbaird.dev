const router = require("express").Router();
const passport = require("passport");
const technologyController = require("../../controllers/technologyController");
const uploadHandler = require("../../middleware/multer-google-storage");
router.get("/", technologyController.getTechnologies);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  uploadHandler.any(),
  technologyController.createTechnology
);
module.exports = router;
