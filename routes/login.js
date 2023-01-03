const bcrypt = require("bcrypt");
const Joi = require("joi");
const express = require("express");
const User  = require("../models/user");
const genAuthToken = require("../utils/genAuthToken");

const router = express.Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({
    email: req.body.email,
    password: req.body.password,
  }); 

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);
  //Checking if the user email is correct
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password...");
  //Checking if the user password is correct
  let validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send("Invalid email or password...");

  const token = genAuthToken(user);

  res.send(token);
});

module.exports = router;
