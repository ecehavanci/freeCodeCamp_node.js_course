const {createReadStream} =require("stream");

const stream = createReadStream("./folder/big.txt");

stream.on("streamName",(result)=>{
    console.log(result);
});

stream.on("error",()=> console.log("error"));