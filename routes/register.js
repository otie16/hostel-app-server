const bcrypt = require("bcrypt");
const Joi = require("Joi");
const express = require("express");
const User  = require("../models/user");
const genAuthToken = require("../utils/genAuthToken");

const router = express.Router();
//User Validation
router.post("/", async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(3).max(1024).required(),
    role: Joi.string().required(),
    // isAdmin: Joi.boolean(),
  });
  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // Checking if the user exists
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists...");

  //Creating a new user
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    // isAdmin: req.body.isAdmin
  });
  // Hashing the password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  user = await user.save(); //Saving to the database

  const token = genAuthToken(user);

  res.send(token); //Sending our token to token
});

module.exports = router 