const router = require('express').Router();
const passport = require('passport');
const publicRoutes = require('./publicRoutes/');
const privateRoute = require('./privateRoutes/');

// Public routes
router.use('/', publicRoutes);

//Privates routes with auth middleware
router.use(
  '/user',
  passport.authenticate('jwt', { session: false }),
  privateRoute
);

module.exports = router;