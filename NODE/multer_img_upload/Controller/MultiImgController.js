const MultiImgSchema = require("../Model/MultiImgSchema");

exports.multiImgController = async (req, res) => {
    try {
        const { imgName, multiImg } = req.body;

        const images = req.files;

        let multipleImg = [];

        images.forEach((img) => {
            multipleImg.push(img.filename);
        })

        const imgUpload = MultiImgSchema.create({
            imgName,
            multiImg: multipleImg
        })

        if (imgUpload) {
            res.status(201).json({ message: 'images uploaded successfully', imgUpload });
        } else {
            res.status(400).json({ message: 'failed to upload images' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.updateMultiImg = async (req, res) => {
    try {
        const { id } = req.params;
        const files = req.files;
        const { keepOldImages } = req.body;

        const existingImages = await MultiImgSchema.findById(id);
        if (!existingImages) {
            res.status(404).json({ message: 'images not found' });
        }

        let newImgFileNames = [];
        files.forEach((file) => {
            newImgFileNames.push(file.filename);
        })

        let updatedImages = [];

        if (keepOldImages && Array.isArray(keepOldImages)) {
            updatedImages = [...keepOldImages, ...newImgFileNames];
        } else {
            updatedImages = newImgFileNames;
        }

        existingImages.multiImg.forEach((img) => {
            const fs = require('fs');
            const path = require('path');

            const filePath = path.join(__dirname, '..', 'uploads', img);

            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        });

        existingImages.multiImg = updatedImages;
        await existingImages.save();

        res.status(200).json({ message: 'images updated successfully' });
    }
    catch (error) {
        console.error("Error updating images:", error);
        res.status(500).json({ message: 'Internal server error' });

    }
}