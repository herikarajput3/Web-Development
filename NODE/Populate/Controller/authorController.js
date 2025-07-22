const authorSchema = require("../Model/authorSchema");
const bcrypt = require("bcrypt");
exports.authorCreate = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashpwd = await bcrypt.hash(password, 10)
        const author = await authorSchema.create({ name, email, password: hashpwd })
        if (author) {
            res.status(201).json({
                success: true,
                message: "author created successfully",
                author
            })
        } else {
            res.status(400).json({
                success: false,
                message: "failed to create author"
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }

}