module.exports = function (Mongoose) {
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;
    const imageTypeSchema = new Schema ({
        name: String,
        tags: Array,
        addDate: { type: Date, default: Date.now },
        updateDate: Date
    });
    const imageType = Mongoose.model("imageType", imageTypeSchema);

    return imageType;
};