const Joi = require('@hapi/joi');

// model
const gender = Joi.object({
  name: Joi.string().required(),
  code: Joi.string().required(),
  addDate: Joi.date(),
  updateDate: Joi.date()
});

// create
const createGender = Joi.object({
  name: Joi.string().required(),
  code: Joi.string().required()
});

// update
const updateGender = Joi.object({
  name: Joi.string(),
  code: Joi.string()
});

// create many
const createManyGenders = Joi.array().items(Joi.object({
  name: Joi.string(),
  code: Joi.string()
}));

module.exports = {
  gender,
  createGender,
  updateGender,
  createManyGenders
};