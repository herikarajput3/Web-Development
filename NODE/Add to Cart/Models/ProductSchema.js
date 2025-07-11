const { Schema, model } = require("mongoose");

const commonSchema = {
    type: String,
    required: true
}

const productSchema = Schema({
    productName: {
        ...commonSchema
    },
    productPrice: {
        type: Number,
        required: true
    },
    productImage: {
        type: [],
    },
    productQuantity: {
        type: Number,
        required: true
    }
})

module.exports = model("Product", productSchema)