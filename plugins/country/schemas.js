const Joi = require('@hapi/joi');

// model
const country = Joi.object({
  name: Joi.string().required(),
  code: Joi.string().required(),
  addDate: Joi.date(),
  updateDate: Joi.date()
});

// create
const createCountry = Joi.object({
  name: Joi.string().required(),
  code: Joi.string().required()
});

// update
const updateCountry = Joi.object({
  name: Joi.string(),
  code: Joi.string()
});

// create many
const createManyCountries = Joi.array().items(Joi.object({
  name: Joi.string(),
  code: Joi.string()
}));

module.exports = {
  country,
  createCountry,
  updateCountry,
  createManyCountries
};