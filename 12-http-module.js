const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        console.log("HOME");
        res.end("Welcome to home page");
    }
    if (req.url === "/about") {
        console.log("About");

        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                for (let k = 0; k < 1000; k++) {
                    console.log(`i: ${i} j: ${j} k: ${k}`);
                }
            }
        }
        response.end('Here is our short history!!!!! about');

    }
});

server.listen(3000, () => {
    console.log("server is running");
});