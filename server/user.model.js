// User model for both client and server
// Keep this in sync between app and server for type safety and structure

/**
 * @typedef {Object} User
 * @property {string} name
 * @property {string} email
 * @property {string} passwordHash
 * @property {string} avatarUrl
 * @property {string} firebaseUid
 * @property {Date} createdAt
 */

// For TypeScript, you could use:
// export interface User {
//   name: string;
//   email: string;
//   passwordHash: string;
//   avatarUrl: string;
//   firebaseUid: string;
//   createdAt: Date;
// }

// For JS, just use JSDoc typedef above

// Helper to create a new user object
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

module.exports = { createUser };
