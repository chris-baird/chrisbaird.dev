const router = require("express").Router();
const userRoutes = require("./userRoutes");
const technologyRoutes =  require('./technologyRoutes');
router.use("/user", userRoutes);
router.use('/technologies', technologyRoutes)
module.exports = router;
