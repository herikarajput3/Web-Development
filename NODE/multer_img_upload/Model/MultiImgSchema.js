const { Schema, model } = require("mongoose");

const multiImgSchema = new Schema({
    imgName: {
        type: String
    },
    multiImg: {
        type: []
    }
}, { timestamps: true })

module.exports = model('multiImg', multiImgSchema);