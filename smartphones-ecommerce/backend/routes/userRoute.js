const express = require("express");
const User = require("../models/userModel");

const router = express.Router()

router.get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "Bruno",
      email: "brunoascenc1@outlook.com",
      password: "ganhapao",
      isAdmin: true,
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports = router