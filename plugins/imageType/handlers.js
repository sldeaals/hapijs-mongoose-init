// REQUIREMENTS
const dbCrudMethods = require("../crudFuncs.js").executeDbMethods;
const db = require('../db/mongoDb/db.js');

//HANDLER'S DECLARATION
const createImageType = async (request, h) => dbCrudMethods('imageType', 'create', request);
const findImageTypeById = async (request, h) => dbCrudMethods('imageType', 'findById', request);
const findImageType = async (request, h) => dbCrudMethods('imageType', 'find', request);
const updateImageType = async (request, h) => dbCrudMethods('imageType', 'update', request);
const deleteImageType = async (request, hack) => dbCrudMethods('imageType', 'delete', request);

module.exports = {
  createImageType,
  findImageTypeById,
  findImageType,
  updateImageType,
  deleteImageType
};