import express from "express"
const router = express.Router()
import userRoutes from "./userRoutes.js"
import technologyRoutes from "./technologyRoutes.js"
import emailRoutes from "./emailRoutes.js"
router.use("/user", userRoutes);
router.use("/technologies", technologyRoutes);
router.use("/messages", emailRoutes);

export default router
