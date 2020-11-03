const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hashing password before user is saved in the database
UserSchema.pre("save", async function (next) {
  //'this' refers to the current document about to be saved
  const user = this;
  // Checks to see if the account is new before hashing password.
  if (user.newAccount) {
    //Hash the password with a salt rounds
    const hash = await bcrypt.hash(user.password, 10);
    //Replace the plain text password with the hash and then store it
    this.password = hash;
    //Calls the next middleware
    next();
  }
  next();
});

//Attaching method to the user schema check if the provided password is valid
UserSchema.methods.isValidPassword = async function (password) {
  const user = this;

  //Hashes the password sent by the user for login and checks if the hashed password stored in the
  //database matches the one sent. Returns true if it does else false.
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
