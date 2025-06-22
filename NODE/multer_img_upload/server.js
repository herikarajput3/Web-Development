const express = require('express');
const app = express();
const port = 3000;
const router = require('./Routes/route')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('uploads'));

app.use('/', router)
app.get('/', (req, res) => res.send('Hey Lili!'));
app.listen(port, () => console.log(`This app is listening on port ${port}`))
