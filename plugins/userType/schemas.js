const Joi = require('@hapi/joi');

// model
const userType = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  modules: Joi.array().items(Joi.string()),
  active: Joi.boolean()
});

// create
const createUserType = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  modules: Joi.array().items(Joi.string()),
  active: Joi.boolean()
});

// update
const updateUserType = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  modules: Joi.array().items(Joi.string()),
  active: Joi.boolean()
});

module.exports = {
  userType,
  createUserType,
  updateUserType
};