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