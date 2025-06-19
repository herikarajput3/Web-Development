const { Schema, default: mongoose, model } = require("mongoose");

const ImgSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    image: {
        type: String
    }
})

// const Image = model('Image', ImgSchema)

// module.exports = Image;

module.exports = mongoose.model('Image', ImgSchema);