module.exports = function (Mongoose) {
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;
    const userSchema =  new Schema ({
        name: String,
        lastName: String,
        email: String,
        mobilePhone: String,
        homePhone: String,
        imageUrl: { type: Object },
        password: String,
        active: { type: Boolean, default: false },
        tags: Array,
        userType: { type: Schema.Types.ObjectId, ref: 'userType' },
        country: { type: Schema.Types.ObjectId, ref: 'country' },
        gender: { type: Schema.Types.ObjectId, ref: 'gender' },
        addDate: { type: Date, default: Date.now },
        updateDate: Date
    });
    const user = Mongoose.model("user", userSchema);

    return user;
};