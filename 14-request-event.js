const http = require("http");

const server = http.createServer();
/*
const server2 = http.createServer((req,res)=>{
    console.log("welcome");
});*/

//emits the serverRequest event
server.on("serverRequest",
(req,res)=>{
    res.end("welcome");
});

server.listen(3000);