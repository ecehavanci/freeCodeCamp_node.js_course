const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>home page</h1");
        res.end(); //must end every response
    }
    else if (url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>about page</h1");
        res.end(); //must end every response
    }
    else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>home page</h1");
        res.end(); //must end every response
    }
});

server.listen(5000);