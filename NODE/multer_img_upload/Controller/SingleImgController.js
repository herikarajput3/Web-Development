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