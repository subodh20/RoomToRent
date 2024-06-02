const authService = require("../services/AuthenticationService");

const authenticationController = {
  async Signup(req, res) {
    try {
      const { email, password } = req.body;
      const user = await authService.Signup(email, password);
      res.status(201).json(user);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },

  async Login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await authService.Login(email, password);
      res.status(201).json({ token });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
};
module.exports = authenticationController;
