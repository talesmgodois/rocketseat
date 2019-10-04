const Spot = require("../models/User");
const { SPOT_EXISTS } = require("../types/erros");

module.exports = {
  async store(req, res) {
    return res.json({ msg: "ok" });
  },
};
