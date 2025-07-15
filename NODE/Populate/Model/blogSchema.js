const { Schema, model } = require("mongoose");

const blogSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    }
})


module.exports = model("Blog", blogSchema);