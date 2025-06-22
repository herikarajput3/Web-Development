const MultiImgSchema = require("../Model/MultiImgSchema");

exports.multiImgController = async (req, res) => {
    try {
        const { imgName, multiImg } = req.body;
        const images = req.files;
        let multiImage = [];

        images.forEach((img) => {
            multiImage.push(img.filename);
        })

        const imgUpload = await MultiImgSchema.create({
            imgName,
            multiImg: multiImage
        })

        if (imgUpload) {
            res.status(200).json({ message: "Multiple images uploaded successfully", imgUpload });
        } else {
            res.status(400).json({ message: "Failed to Multiple images " });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server error" });
    }
}

