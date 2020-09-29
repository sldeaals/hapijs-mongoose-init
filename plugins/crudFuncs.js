'use strict';

const db = require('./db/mongoDb/db.js');

// HANDLERS
const create = async (modelName, data) => {
    const Model = db.getModels()[modelName];
    return await Model.create(data);
};

const findById = async (modelName, id) => {
    const Model = db.getModels()[modelName];
    return await Model.findById({ id });
};

const find = async (modelName, params = {}) => {
    const Model = db.getModels()[modelName];
    return await Model.find(params).exec();
};

const update = async (modelName, id, data) => {
    const Model = db.getModels()[modelName];
    try {
        await Model.where({ _id: id }).update(data);
        let updated = await Model.findById(id).exec();
        return updated
    } catch (err) {
        return err
    }
};

const deleteOne = async (modelName, id) => {
    const Model = db.getModels()[modelName];
    try {
        let deleted = await Model.findById(id).exec();
        await Model.deleteOne({ _id: id });
        return deleted
    } catch (err) {
        return err
    }
};

// HANDLER'S EXECUTION
const executeDbMethods = async (model, methodName, request) => {
    let records = [];
    const util = request.server.methods.utils;
    try {
        switch (['create', 'findById', 'find', 'update', 'delete'].indexOf(methodName)){
            case 0:
                records = await create(model, request.payload);
                break;
            case 1:
                records = await findById(model, request.payload);
                break;
            case 2:
                records = await find(model, request.payload);
                break;
            case 3:
                records = await update(model, request.params.id, request.payload);
                break;
            case 4:
                records = await deleteOne(model, request.params.id);
                break;
        }
        return util.buildResponse(methodName,true,records);
    } catch (err) {
        console.log(err);
        return util.buildResponse(err);
    }
};

module.exports = {
    create, findById, find, update, deleteOne,
    executeDbMethods
};