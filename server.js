//express mongodb mongoose cors nodemon bcrypt joi

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const port = 2233;
const app = express();

const url = "mongodb://localhost/jwtDatabase";

mongoose.connect(url).then(() => {
  console.log("Database is now connected...!");
});

app.use(cors());

app.use(express.json());
app.use("/", require("./MVC/router"));

app.listen(port, () => {
  console.log("Server is Ready to RUN on PORT: ", +port);
});
