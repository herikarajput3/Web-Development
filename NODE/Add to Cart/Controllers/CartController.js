const ProductSchema = require("../Models/ProductSchema");


exports.productCreate = async (req, res) => {
    try {
        const { productName, productPrice, productImage, productQuantity } = req.body;

        const images = req.files;
        let multipleImg = [];

        images.forEach((img) => {
            multipleImg.push(img.filename);
        })

        const product = await ProductSchema.create({ productName, productPrice, productImage: multipleImg, productQuantity });

        if (product) {
            res.status(201).json({ message: "Product created successfully", product });
        } else {
            res.status(400).json({ message: "Product not created" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}