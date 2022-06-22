const UserModel = require('./model');

/**
 * @exports
 * @method findUser
 * @method findAll
 * @param {string} email
 * @summary Get a user by email or list of all users
 * @returns {Promise<UserModel>}
 */
function findUser(email) {
  if (email !== undefined) {
    return UserModel.findUser(email);
  }
  return UserModel.findAll();
}

/**
 * @exports
 * @method createUser
 * @param {object} newUser
 * @summary Crete a new user
 * @returns {Promise<UserModel>}
 */
function createUser(newUser) {
  return UserModel.createUser(newUser);
}

/**
 * @exports
 * @method updateAll
 * @param {string} name
 * @summary Update name all users profile
 * @returns {Promise<void>}
 */
function updateUsers(name) {
  return UserModel.updateAll(name);
}

/**
 * @exports
 * @method deleteUser
 * @param {string} email
 * @summary Delete a user from database
 * @returns {Promise<void>}
 */
function deleteUser(email) {
  return UserModel.deleteUser(email);
}

module.exports = {
  findUser,
  createUser,
  updateUsers,
  deleteUser,
};
