const User = require("../models/User");
const { USUARIO_EXISTENTE } = require("../types/erros");
module.exports = {
  async store(req, res) {
    const { email } = req.body;
    let user = await User.findOne({ email });
    let root;
    if (!user) {
      user = await User.create({ email });
      root = user;
    } else {
      root = USUARIO_EXISTENTE;
    }

    return res.json(root);
  },
};
