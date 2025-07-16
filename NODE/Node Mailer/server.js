const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const nodemailer = require('nodemailer');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

function sendEmail(email, name, message, number) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "herikarajput.rnw@gmail.com",   // Replace with your Gmail address
            pass: "",       // Replace with your generated App Password
        }
    });

    const mailOptions = {
        from: 'herikarajput.rnw@gmail.com', // sender address
        to: email, // receiver address
        subject: `Message from ${name}`, // Subject line
        text: `Hello ${name},\n\n${message},\n\nYour number is: ${number}`, // plain text body
        html: `<b>Hello ${name},</b><br><p>${message}</p>,<br><p style="color:red">Your number is: ${number}</p>`, // html body
    };

    // Send the email
    return transporter.sendMail(mailOptions);
}

app.post('/email', (req, res) => {
    const { email, name, message, number } = req.body;

    sendEmail(email, name, message, number)
        .then(() => {
            res.send('Email sent successfully');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error in sending email');
        });
});

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))