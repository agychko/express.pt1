const UserService = require('./service');
const UserValidation = require('../validation');

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findUser(req, res, next) {
  try {
    const validation = await UserValidation.findUser(req.body);

    const user = await UserService.findUser(validation.email);

    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function createUser(req, res, next) {
  try {
    const validation = await UserValidation.createUser(req.body);
    const user = await UserService.createUser(validation);

    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise<void>}
 */
async function updateUser(req, res, next) {
  try {
    const validation = await UserValidation.updateUser(req.body);
    const updatedUser = await UserService.updateUsers(validation.name);

    return res.status(200).json(updatedUser);
  } catch (error) {
    return next(error);
  }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise<void>}
 */
async function deleteUser(req, res, next) {
  try {
    const validation = await UserValidation.deleteUser(req.body);
    const deletedUser = await UserService.deleteUser(validation.email);

    return res.status(200).json(deletedUser);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  findUser,
  createUser,
  updateUser,
  deleteUser,
};
