const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
    .connect('mongodb://localhost:27017/firstDb')
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log(err, "Database connection failed"));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const userModel = mongoose.model('userModel', userSchema);

app.post('/register', async (req, res) => {
    try {
        const user = await userModel.create(req.body);

        if (!user) {
            res.status(400).json({ message: "User not created" });
        } else {
            res.status(201).json({ message: "User created successfully", user });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))