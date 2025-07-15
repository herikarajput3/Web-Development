const { Schema, model } = require("mongoose");

const commonSchema = {
    type: String,
    required: true
}

const authorSchema = new Schema({
    name: {
        ...commonSchema
    },
    email: {
        ...commonSchema
    },
    password: {
        ...commonSchema
    }
})

module.exports = model("Author", authorSchema);