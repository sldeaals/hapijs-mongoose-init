const Mongoose = require("mongoose");
const { config, options } = require('./config').atlas;

// Database Conection handler
Mongoose.connect(config.url, options);
// Declare models
const models = {
    country: require('./models/country.js')(Mongoose),
    gender: require('./models/gender.js')(Mongoose),
    imageType: require('./models/imageType.js')(Mongoose),
    user: require('./models/user.js')(Mongoose),
    userType: require('./models/userType.js')(Mongoose)
};

// HANDLERS
// Get all models of the system 
const getModels = () => models;
// Get database conection to global purpose
const getConnection = () => Mongoose;

module.exports = {
    getConnection, getModels
};