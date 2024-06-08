const express = require('express');
const router = express.Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

// Create a new user
router.post("/", async (req, res) => {
  try {
    if (req.body.password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }

    const newUser = await User.create(req.body, { individualHooks: true });
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.status(201).json(newUser);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      res.status(400).json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.json({ user, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
