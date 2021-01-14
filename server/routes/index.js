import express from "express"
const router = express.Router()

import apiRoutes from "./api-routes/index.js"
// const htmlRoutes = require("./html-routes");

// Public routes
// router.use("/", htmlRoutes);

//Privates routes with auth middleware
router.use("/api", apiRoutes);

export default router;
