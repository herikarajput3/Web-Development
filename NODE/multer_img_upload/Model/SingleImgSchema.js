const { Schema, model } = require('mongoose')
const singleImgSchema = new Schema({
    imgName: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = model('singleImg', singleImgSchema);