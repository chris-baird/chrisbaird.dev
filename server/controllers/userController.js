const passport = require("passport");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");

module.exports = {
  signUp: async (req, res) => {
    try {
      const user = await UserModel.findByIdAndUpdate(req.user.id, {
        newAccount: false,
      });
      res.json({
        message: "Signup successful",
        user: user || "idk",
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  },
  login: async (req, res, next) => {
    passport.authenticate("login", async (err, user, info) => {
      try {
        if (err || !user) {
          return res.json(null);
        }
        req.login(user, { session: false }, async (error) => {
          // console.log(error);
          if (error) return next(error);
          //We don't want to store the sensitive information such as the
          //user password in the token so we pick only the email and id
          const body = { _id: user._id, email: user.email };
          //Sign the JWT token and populate the payload with the user email and id
          const token = jwt.sign({ user: body }, process.env.SECRET);
          //Send back the token to the user
          return res.json({ token });
        });
      } catch (error) {
        console.log(error);
        return next(error);
      }
    })(req, res, next);
  },
  getUserData: async (req, res) => {
    const data = await UserModel.findOne({ email: req.params.id });
    res.json(data);
  },
};
