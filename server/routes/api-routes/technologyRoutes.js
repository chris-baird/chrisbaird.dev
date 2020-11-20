const router = require("express").Router();
const technologyController = require("../../controllers/technologyController");
const uploadHandler = require("../../middleware/multer-google-storage");
router.get("/", technologyController.getTechnologies);
router.post("/", uploadHandler.any(), technologyController.createTechnology);
module.exports = router;
