const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/firstDb')
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err))

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model('User', userSchema);

//Create a new user
app.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);

        if (user) {
            res.status(201).json({ message: 'User registered successfully' });
        } else {
            res.status(400).json({ message: 'User registration failed' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
})

// Get all users

app.get('/users', async (req, res) => {
    try {
        const userData = await User.find();

        if (userData) {
            res.status(200).json({ message: 'Users data fetched successfully', userData });
        } else {
            res.status(400).json({ message: 'Failed to fetch users data' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
})

// Get single user

app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const userData = await User.findById(id);

        if (userData) {
            res.status(200).json({ message: 'User data fetched successfully', userData });
        } else {
            res.status(400).json({ message: 'Failed to fetch user data' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
})

// Update user

app.put('/userUpdate/:id', async (req, res) => {
    try {
        const { id } = req.params
        const userData = await User.findByIdAndUpdate(id, req.body);

        if (userData) {
            res.status(200).json({ message: 'User data updated successfully' });
        } else {
            res.status(400).json({ message: 'Failed to update user data' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
})

// Delete single user

app.delete('/userDelete/:id', async (req, res) => {
    try {
        const { id } = req.params
        const userData = await User.findByIdAndDelete(id);

        if (userData) {
            res.status(200).json({ message: 'User deleted successfully', userData });
        } else {
            res.status(400).json({ message: 'Failed to delete the user' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
})

// Delete all users
app.delete('/usersDelete', async (req, res) => {
    try {
        const userData = await User.deleteMany();
        if (userData) {
            res.status(200).json({ message: 'Users deleted successfully', userData });
        } else {
            res.status(400).json({ message: 'Failed to delete users' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
})





app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))