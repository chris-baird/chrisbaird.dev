const router = require("express").Router();
const userRoutes = require("./userRoutes");
const technologyRoutes = require("./technologyRoutes");
const emailRoutes = require("./emailRoutes");
router.use("/user", userRoutes);
router.use("/technologies", technologyRoutes);
router.use("/messages", emailRoutes);

module.exports = router;
