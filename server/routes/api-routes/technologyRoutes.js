const router = require('express').Router();
const technologyController = require('../../controllers/technologyController')
router.use('/', technologyController.getTechnologies)
module.exports = router;