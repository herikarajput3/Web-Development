const { Schema, model } = require("mongoose");

const SingleImgSchema = new Schema({
    ImgName: {
        type: String
    },
    SingleImg: {
        type: String
    }
})

module.exports = model('SingleImg', SingleImgSchema);