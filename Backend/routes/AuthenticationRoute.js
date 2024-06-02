const express = require("express");
const router = express.Router();

const authenticationController = require("../controllers/AuthenticationController");

router.post("/signup", authenticationController.Signup);
router.post("/login", authenticationController.Login);

module.exports = router;
