const Joi = require('joi');

module.exports = {

  findUser(data) {
    return Joi
      .object({
        email: Joi.string().email(),
      })
      .validateAsync(data);
  },

  createUser(data) {
    return Joi
      .object({
        email: Joi.string().email().required(),
        name: Joi.string().alphanum().required(),
      })
      .validateAsync(data);
  },

  updateUser(data) {
    return Joi
      .object({
        name: Joi.string().alphanum().required(),
      })
      .validateAsync(data);
  },

  deleteUser(data) {
    return Joi
      .object({
        email: Joi.string().email().required(),
      })
      .validateAsync(data);
  },
};
