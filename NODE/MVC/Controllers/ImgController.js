const ImageSchema = require("../Model/ImageSchema");

exports.ImageController = async (req, res) => {
    try {
        const { name, email, password, image } = req.body;

        const img = await ImageSchema.create({
            name,
            email,
            password,
            image: req?.file?.filename,
        })

        if (img) {
            res.status(201).json({ message: "Image uploaded successfully", img })
        } else {
            res.status(400).json({ message: "Image not uploaded" })
        }
    } catch (error) {
        console.error("Error", error);
        res.status(500).json({ message: "Internal Server Error" }, error.errmsg)

    }
}