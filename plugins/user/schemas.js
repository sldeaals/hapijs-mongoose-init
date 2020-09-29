// IMPORTS
const Joi = require('@hapi/joi');
// HELPERS
const lowercaseLetters = "(?=.*[a-z])";
const uppercaseLetters = "(?=.*[A-Z])";
const numbers = "(?=.*[0-9])";
// For password character restrictions
//const specialChars = "(?=.*[!@#\$%\^&\*])";
const passwordRegex = new RegExp("^" + lowercaseLetters + uppercaseLetters + numbers);
const onlyNumbers = new RegExp("^" + numbers);

const changePassword = Joi.object({
  oldPwd: Joi.string(),
  newPwd: Joi.string()
    .min(6)
    .regex(passwordRegex)
    .description("String with a mix of numbers, uppercase \
             and lowercase letters.")
});

// model
const user = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  lastName: Joi.string().min(1).max(100).required(),
  email: Joi.string().min(1).max(100),
  mobilePhone: Joi.string().min(10).max(11).regex(onlyNumbers).error(e => 'User => invalid mobile phone'),
  homePhone: Joi.string().min(10).max(11).regex(onlyNumbers).error(e => 'User => invalid home phone').allow(null),
  userType: Joi.string(),
  country: Joi.string(),
  gender: Joi.string(),
  tags: Joi.array(),
  imageUrl: Joi.array().items(
    {
      name: Joi.string().max(100),
      binary: Joi.any(),
      imageTypeId: Joi.number().required()
    }
  ).optional().allow(null),
  active: Joi.boolean(),
  addDate: Joi.date()
});

const login = {
  user: Joi.string().required(),
  password: Joi.string().required(),
  expired: Joi.boolean().default(false)
};

// create
const createUser = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  lastName: Joi.string().min(1).max(100).required(),
  email: Joi.string().min(1).max(100),
  mobilePhone: Joi.string().min(10).max(11).regex(onlyNumbers).error(e => 'User => invalid mobile phone'),
  homePhone: Joi.string().min(10).max(11).regex(onlyNumbers).error(e => 'User => invalid home phone').allow(null),
  userType: Joi.string(),
  country: Joi.string(),
  gender: Joi.string(),
  imageUrl: Joi.array().items(
    {
      name: Joi.string().max(100),
      binary: Joi.any(),
      imageTypeId: Joi.number().required()
    }
  ).optional().allow(null),
  active: Joi.boolean()
});

// update
const updateUser = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  lastName: Joi.string().min(1).max(100).required(),
  email: Joi.string().min(1).max(100),
  mobilePhone: Joi.string().min(10).max(11).regex(onlyNumbers).error(e => 'User => invalid mobile phone'),
  homePhone: Joi.string().min(10).max(11).regex(onlyNumbers).error(e => 'User => invalid home phone').allow(null),
  userType: Joi.string(),
  country: Joi.string(),
  gender: Joi.string(),
  imageUrl: Joi.array().items(
    {
      name: Joi.string().max(100),
      binary: Joi.any(),
      imageType: Joi.string()
    }
  ).optional().allow(null),
});

const createUserAccount = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  reconfirmPassword: Joi.string().required()
});

module.exports = {
  user,
  createUser,
  updateUser,
  createUserAccount,
  changePassword
};