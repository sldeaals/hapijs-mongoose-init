module.exports = function (Mongoose) {
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;
    const countrySchema =  new Schema ({
        name: String,
        code: String,
        addDate: { type: Date, default: Date.now },
        updateDate: Date
    });
    const country = Mongoose.model("country", countrySchema);

    return country;
};