const { Schema, model } = require("mongoose");

const commonSchema = {
    type: String,
}

const userSchema = new Schema({
    name: { ...commonSchema },
    email: { ...commonSchema, unique: true },
    pwd: { ...commonSchema },
})

module.exports = model('user', userSchema);