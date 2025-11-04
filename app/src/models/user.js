// User model for client (keep in sync with server/user.model.js)

/**
 * @typedef {Object} User
 * @property {string} name
 * @property {string} email
 * @property {string} passwordHash
 * @property {string} avatarUrl
 * @property {string} firebaseUid
 * @property {Date} createdAt
 */

export function createUser({ name, email, passwordHash, avatarUrl = '', firebaseUid }) {
  return {
    name,
    email,
    passwordHash,
    avatarUrl,
    firebaseUid,
    createdAt: new Date()
  }
}
