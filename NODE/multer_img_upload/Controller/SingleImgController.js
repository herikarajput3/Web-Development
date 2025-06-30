const SingleImgSchema = require('../Model/SingleImgSchema');
exports.SingleImgController = async (req, res) => {
    try {
        const { imgName, image } = req.body;
        const img = req.file.filename;

        const imgUpload = SingleImgSchema.create({
            imgName,
            image: img
        })

        if (imgUpload) {
            res.status(201).json({ message: 'image uploaded successfully', imgUpload });
        } else {
            res.status(400).json({ message: 'failed to upload image' });
        }
    } catch (error) {

    }
}

exports.update = async (req, res) => {
    try {
        const { imgName, image } = req.body;
        const { id } = req.params;

        const profile = await SingleImgSchema.findById(id);
        if (!profile) {
            res.status(404).json({ message: 'image not found' });
        }

        if (req.file && profile.image) {
            const fs = require('fs');
            const path = require('path');
            const oldImgPath = path.join(__dirname, '..', 'uploads', profile.image);

            if (fs.existsSync(oldImgPath)) {
                fs.unlinkSync(oldImgPath);
            }
        }

        await SingleImgSchema.findByIdAndUpdate(id, {
            imgName,
            image: req.file.filename
        });
        res.status(200).json({ message: 'image updated successfully' });
    }
    catch (error) {
        console.error("Error updating image:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
}