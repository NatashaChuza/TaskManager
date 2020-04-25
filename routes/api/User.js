const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Load input validation
const validateRegisterInput = require("../../validation/Register");
const validateLoginInput = require("../../validation/Login");

const User = require("../../models/User");


//@route POST 'api/users/register'
//@desc registers a user
//@access public
router.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const { userName, email, password } = req.body;
    //check if user exists
    User.findOne({ email }).then((user) => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          userName,
          email,
          password,
        });
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => res.json(user))
              .catch((err) => console.log(err));
          });
        });
      }
    });
  });

//@route POST api/users/login
//@desc logs in a user
//@access public
router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const { email, password } = req.body;
    User.findOne({ email }).then((user) => {
      if (!user) {
        return res.status(200).json("User does not exist");
      }
      //check password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          // return res.status(200).json(user);
          const payload = {
            id: user.id,
            userName: user.userName,
          };
          jwt.sign(payload, process.env.secret, (err, token) => {
            if (err) throw err;
            res.status(200).json({
              user,
              Authorization : "Bearer " + token,
            });
          });
        } else {
          return res.status(400).json({ msg: "password is incorrect" });
        }
      });
    });
  });

  module.exports = router;