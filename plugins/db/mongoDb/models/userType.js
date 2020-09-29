module.exports = function (Mongoose) {
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;
    const userTypeSchema =  new Schema ({
        name: String,
        description: String,
        modules: { type: Array, default: ["dashboard","userconfig","profile"] },
        active: { type: Boolean, default: false },
        tags: Array,
        addDate: { type: Date, default: Date.now },
        updateDate: Date
    });
    const userType = Mongoose.model("userType", userTypeSchema);

    return userType;
};