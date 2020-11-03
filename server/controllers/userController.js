const passport = require("passport");
const jwt = require("jsonwebtoken");
const UserModel = require("../model/user");

module.exports = {
  signUp: async (req, res) => {
    try {
      console.log("INSIDE USER CONTROLLER");
      console.log(req.user.id);
      const user = await UserModel.findByIdAndUpdate(req.user.id, {
        newAccount: false,
      });
      console.log("UPDATED USER");
      console.log(user);
      res.json({
        message: "Signup successful",
        user: user || "idk",
      });
    } catch (error) {
      console.log(error);
    }
  },
  login: async (req, res, next) => {
    passport.authenticate("login", async (err, user, info) => {
      try {
        console.log(req.body);
        if (err || !user) {
          const error = new Error("An Error occurred");
          return next(error);
        }
        req.login(user, { session: false }, async (error) => {
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
        return next(error);
      }
    })(req, res, next);
  },
  getUserData: async (req, res) => {
    const data = await UserModel.findOne({ email: req.params.id });
    res.json(data);
  },
};
