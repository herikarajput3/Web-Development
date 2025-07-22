const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request URL: ${req.url}`);

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>Welcome to the Home Page</h1>');
    }
    else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1>About Us Page</h1>');
    }
    else if (req.url === '/contact') {
        res.statusCode = 200;
        res.end('<h1>Contact Us at: contact@example.com</h1>');
    }
    else {
        res.statusCode = 404;
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
