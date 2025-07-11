const { Schema, model } = require("mongoose");

const commonSchema = {
    type: String,
    require: true
}

const userSchema = Schema({
    name: {
        ...commonSchema
    },
    email: {
        ...commonSchema,
        unique: true
    },
    password: {
        ...commonSchema
    }
})

module.exports = model('User', userSchema);