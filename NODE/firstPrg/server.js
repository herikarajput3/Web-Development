const http = require('http');
const fs = require('fs'); // file system

const port = 3000;

// const server = http.createServer((req, res) => {
//     res.end("hello world");
// })

// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// })

// **************** ROUTING USING SWITCH CASE ****************

// const server = http.createServer((req, res) => {
//     switch (req.url) {
//         case '/':
//             res.end("home page");
//             break;
//         case '/about':
//             res.end("about page");
//             break;
//         case '/contact':
//             res.end("contact page");
//             break;
//         default:
//             res.end("404 page not found");
//             break;
//     }
// }).listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// })

// **************** ROUTING WHILE CREATING INDIVIDUAL PAGES ****************

const server = http.createServer((req, res) => {
    let fileName = "";
    switch (req.url) {
        case '/':
            fileName = "./home.html";
            break;
        case '/about':
            fileName = "./about.html";
            break;
        case '/contact':
            fileName = "./contact.html";
            break;
        default:
            // res.end("404 page not found"); //why it is not working?
            break;
    }

    if (fileName) {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                console.log(err, "error in reading a file");
                res.write("404 page not found");
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        })
    }
    else {
        res.write("<h1>404 page not found</h1>");
        res.end();
    }
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});