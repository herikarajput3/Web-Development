const express = require('express')
const app = express()
const port = 3000
const router = require('./Routes/routes')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use('/', router)
app.use('/', express.static('uploads'))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))