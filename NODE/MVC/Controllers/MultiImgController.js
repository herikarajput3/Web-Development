const MultiImgSchema = require("../Model/MultiImgSchema");

exports.MultiImgController = async (req, res) => {
    try {
        const { imgName, multiImage } = req.body;
        const images = req.files;

        let multiImg = [];

        images.forEach((img) => {
            multiImg.push(img.filename);
        });

        const imgUpload = await MultiImgSchema.create({
            imgName,
            multiImage: multiImg
        });

        if (imgUpload) {
            res.status(201).json({ message: "Images uploaded successfully", imgUpload })
        } else {
            res.status(400).json({ message: "Images are not uploaded" })
        }
    } catch (error) {
        console.error("Error", error);
        res.status(500).json({ message: "Internal Server Error" }, error.errmsg)
    }
}