// REQUIREMENTS
const dbCrudMethods = require("../crudFuncs.js").executeDbMethods;
const db = require("../db/mongoDb/db");

// HANDLER'S DECLARAION
const createUserType = async (request, h) => dbCrudMethods('userType', 'create', request);
const findUserType = async (request, h) => dbCrudMethods('userType', 'find', request);
const findUserTypeById = async (request, h) => dbCrudMethods('userType', 'findById', request);
const updateUserType = async (request, h) => dbCrudMethods('userType', 'update', request);
const deleteUserType = async (request, h) => dbCrudMethods('userType', 'delete', request);

module.exports = {
    createUserType,
    findUserType,
    findUserTypeById,
    updateUserType,
    deleteUserType
};