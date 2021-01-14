import passport from "passport"
import passportLocal from "passport-local"
import passportJWT from "passport-jwt"
import UserModel from "../models/user.js"

//This verifies that the token sent by the user is valid
passport.use(
  new passportJWT.Strategy(
    {
      //secret used to sign our JWT
      secretOrKey: process.env.SECRET,
      //Expects the user to send the token as a query parameter with the name 'secret_token'
      jwtFromRequest: passportJWT.ExtractJwt.fromUrlQueryParameter(
        "secret_token"
      ),
    },
    async ({ user }, done) => {
      try {
        //Pass the user details to the next middleware
        return done(null, user)
      } catch (error) {
        return done(error)
      }
    }
  )
)

//Passport middleware to handle user registration
passport.use(
  "signup",
  new passportLocal.Strategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        //Save the information provided by the user to the the database
        const user = await UserModel.create({ email, password })
        //Send the user information to the next middleware
        return done(null, user)
      } catch (error) {
        return done(error)
      }
    }
  )
)

//Passport middleware to handle User login
passport.use(
  "login",
  new passportLocal.Strategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        //Find the user associated with the email provided by the user
        const user = await UserModel.findOne({ email })
        if (!user) {
          //If the user isn't found in the database, return a message
          return done(null, false, { message: "User not found" })
        }
        //Validate password and make sure it matches with the corresponding hash stored in the database
        //If the passwords match, it returns a value of true.
        const validate = await user.isValidPassword(password)
        if (!validate) {
          return done(null, false, { message: "Wrong Password" })
        }
        //Send the user information to the next middleware
        return done(null, user, { message: "Logged in Successfully" })
      } catch (error) {
        return done(error)
      }
    }
  )
)
