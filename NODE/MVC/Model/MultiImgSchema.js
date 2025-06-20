const { Schema, default: mongoose } = require("mongoose");

const commonSchema = {
    type: String
}

const multiImgSchema = new Schema({
    imgName: {
        ...commonSchema
    },
    multiImage: {
        type: []
    }
}, { timestamps: true })

module.exports = mongoose.model('multiImg', multiImgSchema);

