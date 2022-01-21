const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
var bodyParser = require("body-parser");
const port = 3370;
const app = express();

const url = "mongodb://localhost/getUser";

const uri =
  "mongodb://AuthClass:AuthClass@codelab-shard-00-00.u4drr.mongodb.net:27017,codelab-shard-00-01.u4drr.mongodb.net:27017,codelab-shard-00-02.u4drr.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-otoe08-shard-0&authSource=admin&retryWrites=true&w=majority";

const uri2 =
  "mongodb+srv://PeterPan:PeterPan@codelab.eqkgv.mongodb.net/UserData?retryWrites=true&w=majority";

mongoose.connect(uri).then(() => {
  console.log("DB is now connected....");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/", require("./file/router"));

app.listen(port, () => {
  console.log("server is connected");
});
