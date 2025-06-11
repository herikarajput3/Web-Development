const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
    .connect('mongodb://localhost:27017/firstDb')
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Database is not connected", err))

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const userModel = mongoose.model('userModel', userSchema);

app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.create({ name, email, password });
        if (!user) {
            res.status(400).json({ message: "User not created" })
        } else {
            res.status(201).json({ message: "User created successfully", user });
        }
    } catch (error) {
        console.log("Something went wrong", error);
        res.status(500).json({ message: "Something went wrong" })
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await userModel.find();
        if (!users) {
            res.status(400).json({ message: "Error while fetching users" })
        } else {
            res.status(200).json({ message: "Users fetched successfully", users });
        }
    } catch (error) {
        console.log("Something went wrong", error);
        res.status(500).json({ message: "Something went wrong" })
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const userData = await userModel.findById(id);
        if (!userData) {
            res.status(400).json({ message: "Error while fetching the user" })
        } else {
            res.status(200).json({ message: "User fetched successfully", userData });
        }
    } catch (error) {
        console.log("Something went wrong", error);
        res.status(500).json({ message: "Something went wrong" })
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const userData = await userModel.findByIdAndDelete(id);
        if (userData) {
            res.json({
                success: true,
                message: "user deleted"
            })
        } else {
            res.json({
                success: false,
                message: "user not deleted"
            })
        }
    } catch (error) {
        res.json(error.message);
        console.error("error", error)
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, password } = req.body;
        const userData = await userModel.findByIdAndUpdate(
            {
                _id: id
            },
            {
                name, email, password
            }
        );
        if (userData) {
            res.json({
                success: true,
                message: "user updated successfully"
            })
        } else {
            res.json({
                success: false,
                message: "user not updated"
            })
        }

    } catch (error) {
        res.json(error.message);
        console.error("error", error)
    }
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))