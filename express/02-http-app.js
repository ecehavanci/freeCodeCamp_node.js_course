const http = require("http");
const { readFileSync } = require("fs");

const homeHtml = readFileSync("./navbar-app/index.html");
const homeCss = readFileSync("./navbar-app/styles.css");
const homeLogo = readFileSync("./navbar-app/logo.svg");
const homeJs = readFileSync("./navbar-app/browser-app");

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>home page</h1");
        res.end(); //must end every response
    }
    else if (url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(homeHtml);
        res.end(); //must end every response
    }
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeCss);
        res.end()
    }
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeLogo);
        res.end();
    }
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeJs);
        res.end();
    }
    else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>page Not found</h1");
        res.end(); //must end every response
    }
});

server.listen(5000);