const mongoose = require("mongoose");
const userModel = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    password: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("usersModel", userModel);
