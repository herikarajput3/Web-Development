const { Schema, model } = require("mongoose");

const commonSchema = {
    type: String,
    require: true
}

const userSchema = new Schema({
    name: {
        ...commonSchema
    },
    email: {
        ...commonSchema,
        // unique: true
    },
    password: {
        ...commonSchema
    }
}, { timestamps: true })

module.exports = model('User', userSchema);