const router = require("express").Router();
const apiRoutes = require("./api-routes");
const htmlRoutes = require("./html-routes");

// Public routes
// router.use("/", htmlRoutes);

//Privates routes with auth middleware
router.use("/user", apiRoutes);

module.exports = router;
