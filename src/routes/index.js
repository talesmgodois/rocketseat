const express = require("express");
const routes = express.Router();

const SessionController = require("../controllers/SessionController");

routes.get("/", (req, res) => {
  return res.json({ msg: "is running" });
});

routes.get("/session", (req, res) => {
  return res.json(req.body);
});

module.exports = routes;
