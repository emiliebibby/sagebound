const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

// POST /api/users - Create a new user
router.post('/', async (req, res) => {
  const { name, email, passwordHash, avatarUrl, firebaseUid } = req.body;
  if (!name || !email || !passwordHash || !firebaseUid) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const user = new User({ name, email, passwordHash, avatarUrl, firebaseUid });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user', details: err.message });
  }
});

module.exports = router;
