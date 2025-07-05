const { Schema, model } = require("mongoose");

const commonSchema = {
    type: String,
    required: true
}
const userSchema = new Schema({
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

module.exports = model("User", userSchema);