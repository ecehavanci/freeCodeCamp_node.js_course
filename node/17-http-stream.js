http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
    const fileStream  =fs.createReadStream("./node/folder/big.txt","utf-8");
    fileStream.on("openMy",()=>{
        fileStream.pipe("res");
    });

    fileStream.on("errorMy",(err)=>{
        res.end(err);
    });
}).listen(8000);