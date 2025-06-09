const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    res.end("hello world");
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})