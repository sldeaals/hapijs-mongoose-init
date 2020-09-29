// REQUIREMENTS
const dbCrudMethods = require("../crudFuncs.js").executeDbMethods;
const db = require('../db/mongoDb/db.js');

// HANDLER'S DECLARAION
const createGender = async (request, h) => dbCrudMethods('gender', 'create', request);
const findGender = async (request, h) => dbCrudMethods('gender', 'find', request);
const findGenderById = async (request, h) => dbCrudMethods('gender', 'findById', request);
const updateGender = async (request, h) => dbCrudMethods('gender', 'update', request);
const deleteGender = async (request, h) => dbCrudMethods('gender', 'delete', request);

const createManyGenders = async (request, h) => {
    const util = request.server.methods.utils;
    const payload = request.payload;
    let createdRecords = [];  
    try {
        const Model = db.getModels()["gender"];
        for (let records of payload){
            createdRecords.push(await Model.create(records));
        }        
        return util.buildResponse('Create many genders',true,createdRecords);
    } catch (err) {
        console.log(err);
        return util.buildResponse(err);
    }    
};

module.exports = {
    createGender,
    findGender,
    findGenderById,
    updateGender,
    deleteGender,
    createManyGenders
};