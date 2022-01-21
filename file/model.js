const mongoose = require("mongoose");
const modelData = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  img: {
    image: String,
    contentType: String,
  },
});

module.exports = mongoose.model("userData", modelData);
