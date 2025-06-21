const SingleImgSchema = require("../Model/SingleImgSchema");

exports.SingleImgController = async (req, res) => {
    try {
        const { ImgName, SingleImg } = req.body;
        const img = req.file.filename;

        const image = await SingleImgSchema.create({
            ImgName,
            SingleImg: img
        })

        if (image) {
            res.status(201).json({ message: 'Image added successfully', image })
        } else {
            res.status(400).json({ message: 'Failed to add image' })
        }
    } catch (error) {
        console.error("error", error);
        res.status(500).json({ message: 'Internal server error' })

    }

}