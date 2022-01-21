const express = require("express");
const router = express.Router();
const model = require("./model");
var multer = require("multer");
const fs = require("fs");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

var uploads = multer({ storage: storage }).single("img");

router.get("/", async (req, res) => {
  const getData = await model.find();
  res.status(200).json(getData);
});

router.get("/:id", async (req, res) => {
  const getData = await model.findById(req.params.id, req.body);
  res.status(200).json(getData);
});

router.delete("/:id", async (req, res) => {
  const getData = await model.findByIdAndRemove(req.params.id, req.body);
  res.status(200).json({ msg: "deleted" });
});

router.patch("/:id", async (req, res) => {
  const getData = await model.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(getData);
});

router.post("/", uploads, async (req, res, next) => {
  var img = fs.readFileSync(req.file.path);
  var encode_image = img.toString("base64");

  const myImage = {
    contentType: req.file.mimetype,
    image: new Buffer(encode_image, "base64"),
  };
  const getData = await model.create({
    name: req.body.name,
    email: req.body.email,
    img: myImage,
  });
  res.status(200).json(getData);
});

module.exports = router;
