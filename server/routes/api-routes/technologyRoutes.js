import express from "express"
import passport from "passport"
import technologyController from "../../controllers/technologyController.js"
import uploadHandler from "../../middleware/multer-google-storage.js"
const router = express.Router()
router.get("/", technologyController.getTechnologies);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  uploadHandler.any(),
  technologyController.createTechnology
);
export default router;
