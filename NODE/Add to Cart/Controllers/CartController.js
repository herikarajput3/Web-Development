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

exports.getProducts = async (req, res) => {
    try {
        const products = await ProductSchema.find();

        if (products) {
            res.status(200).json({ message: "Products fetched successfully", products });
        } else {
            res.status(400).json({ message: "Products not fetched" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { productName, productPrice, productQuantity } = req.body;
        // const { keepOldImgs } = req.body; 
        const files = req.files;

        const existingImage = await ProductSchema.findById(id);

        if (!existingImage) {
            return res.status(404).json({ message: "Product Image not found" });
        }

        let newImgFiles = [];

        files.forEach((img) => {
            newImgFiles.push(img.filename);
        })

        // let updatedImg = [];

        // if (keepOldImgs && Array.isArray(keepOldImgs)) {
        //     updatedImg = [...keepOldImgs, ...newImgFiles];
        // } else {
        //     updatedImg = newImgFiles;

        //     existingImage.productImage.forEach((img) => {
        //         const fs = require('fs');
        //         const path = require('path');
        //         const filepath = path.join(__dirname, '..', 'uploads', img);
        //         if (fs.existsSync(filepath)) {
        //             fs.unlinkSync(filepath);
        //         }
        //     })
        // }

        // Delete old images from uploads folder

        existingImage.productImage.forEach((img) => {
            const fs = require('fs');
            const path = require('path');
            const filepath = path.join(__dirname, '..', 'uploads', img);
            if (fs.existsSync(filepath)) { // Check if the file exists
                fs.unlinkSync(filepath); // Delete the file
            }
        })

        existingImage.productImage = newImgFiles;

        await existingImage.save();

        const updatedProduct = await ProductSchema.findByIdAndUpdate(id, { productName, productPrice, productImage: newImgFiles, productQuantity });

        if (updatedProduct) {
            res.status(200).json({ message: "Product updated successfully", updatedProduct });
        } else {
            res.status(400).json({ message: "Product not updated" });

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }

}

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductSchema.findByIdAndDelete(id);
        if (product) {
            res.status(200).json({ message: "Product deleted successfully" });
        } else {
            res.status(400).json({ message: "Product not deleted" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}