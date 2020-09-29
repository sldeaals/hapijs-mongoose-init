const Joi = require('@hapi/joi');

// model
const imageType = Joi.object({
  name: Joi.string().max(100),
  tags: Joi.array(),
  dateAdd: Joi.date(),
  dateUpdate: Joi.date()
});

// create
const createImageType = Joi.object({
  name: Joi.string().max(100),
  tags: Joi.string()
});

// update
const updateImageType = Joi.object({
  name: Joi.string().max(100),
  tags: Joi.array()
});

module.exports = {
  imageType,
  createImageType,
  updateImageType
};