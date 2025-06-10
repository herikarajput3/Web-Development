const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose
    .connect('mongodb://localhost:27017/firstDb')
    .then(() => console.log("db connected successfully 👍"))
    .catch((err) => console.log(err, "db connection failed 👎"));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const userModal = mongoose.model("userModel", userSchema);

app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);
        const userData = await userModal.create({ name, email, password });
        if (!userData) {
            res.status(400).json({ message: "user not created" });
        } else {
            res.status(201).json({ message: "user created successfully", userData });
        }
    } catch (error) {
        res.status(400).json({ message: "something went wrong" });
    }
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))