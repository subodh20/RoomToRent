const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createSecretToken = require("../util/createSecretToken");
const User = require("../models/User");
const { model } = require("mongoose");

const authService = {
  async Signup(email, password) {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }
    const hashedPasword = await bcryptjs.hash(password, 10);
    const user = await User.create({ email, password: hashedPasword });
    return user;
  },
  async Login(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User could  found");
    const isValidPassword = await bcryptjs.compare(password, user.password);
    if (!isValidPassword) throw new Error("Invalid password");
    const token = createSecretToken(email);
    return token;
  },
};

module.exports = authService;
