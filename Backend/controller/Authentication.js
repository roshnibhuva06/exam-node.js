const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    await User.create({
      username,
      password,
      role
    });

    res.redirect("/login");
  } catch (err) {
    res.send("Registration Error");
  }
};


exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.send("User Not Found");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.send("Wrong Password");

    

    const token = jwt.sign(
      { id: user._id, role: user.role },
      "secretkey",
      { expiresIn: "1h" }
    );

    res.json({ token });

  } catch (err) {
    res.send("Login Error");
  }
};

