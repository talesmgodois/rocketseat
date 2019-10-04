const express = require("express");
const multer = require("multer");
const uploadConfig = require("../config/upload");
const routes = express.Router();

const SessionController = require("../controllers/SessionController");
const SpotController = require("../controllers/SpotController");

routes.get("/", (req, res) => {
  return res.json({ msg: "is running" });
});

routes.post("/session", SessionController.store);
routes.post("/spot", SpotController.store);

module.exports = routes;
