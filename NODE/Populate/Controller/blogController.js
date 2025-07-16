const blogSchema = require("../Model/blogSchema");

exports.blogCreate = async (req, res) => {
    const { title, description, author } = req.body;
    try {
        const blog = await blogSchema.create({ title, description, author })
        if(!title || !description || !author){
            res.status(400).json({
                message: "title, description and author are required"
            })
        }
        
        if (blog) {
            res.status(201).json({
                success: true,
                message: "blog created successfully",
                blog
            })
        } else {
            res.status(400).json({
                success: false,
                message: "failed to create blog"
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

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogSchema.find().populate("author");
        if (blogs) {
            res.status(200).json({
                success: true,
                message: "blogs fetched successfully",
                blogs
            })
        } else {
            res.status(400).json({
                success: false,
                message: "failed to fetch blogs"
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