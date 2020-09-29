// REQUIREMENTS
const dbCrudMethods = require("../crudFuncs.js").executeDbMethods;
const db = require('../db/mongoDb/db.js');

// HANDLER'S DECLARAION
const createCountry = async (request, h) => dbCrudMethods('country', 'create', request);
const findCountry = async (request, h) => dbCrudMethods('country', 'find', request);
const findCountryById = async (request, h) => dbCrudMethods('country', 'findById', request);
const updateCountry = async (request, h) => dbCrudMethods('country', 'update', request);
const deleteCountry = async (request, h) => dbCrudMethods('country', 'delete', request);

const createManyCountries = async (request, h) => {
    const util = request.server.methods.utils;
    const payload = request.payload;
    let createdRecords = [];  
    try {
        const Model = db.getModels()["country"];
        for (let records of payload){
            createdRecords.push(await Model.create(records));
        }        
        return util.buildResponse('Create many countries',true,createdRecords);
    } catch (err) {
        console.log(err);
        return util.buildResponse(err);
    }    
};

module.exports = {
    createCountry,
    findCountry,
    findCountryById,
    updateCountry,
    deleteCountry,
    createManyCountries
};