module.exports = function (Mongoose) {
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;
    const genderSchema = new Schema ({
        name: String,
        code: String,
        addDate: { type: Date, default: Date.now },
        updateDate: Date
    });
    const gender = Mongoose.model("gender", genderSchema);

    return gender;
};