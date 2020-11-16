const router = require("express").Router();
const technologyController = require("../../controllers/technologyController");
router.get("/", technologyController.getTechnologies);
router.post("/", technologyController.createTechnology);
module.exports = router;
