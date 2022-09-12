const User = require("../models/userSchema.js");

const userSignUp = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return res.status(401).json({ message: "User already Exists" });
    }
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.status(200).json({ message: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    let Existeduser = await User.findOne({
      username: username,
      password: password,
    });
    if (Existeduser) {
      return res.status(200).json({ data: Existeduser });
    } else {
      return res.status(401).json("Invalid Login");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { userSignUp, userLogin };
