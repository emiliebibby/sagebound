const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  avatarUrl: { type: String, default: '' },
  firebaseUid: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

/**
 * @typedef {Object} User
 * @property {string} name
 * @property {string} email
 * @property {string} passwordHash
 * @property {string} avatarUrl
 * @property {string} firebaseUid
 * @property {Date} createdAt
 */

function createUser({ name, email, passwordHash, avatarUrl = '', firebaseUid }) {
  return {
    name,
    email,
    passwordHash,
    avatarUrl,
    firebaseUid,
    createdAt: new Date()
  }
}

module.exports = { User, createUser };
