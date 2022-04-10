const {EventEmitter} = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("myResponse",(name,id)=>{
    console.log(`data received user ${name} with ID ${id}`);
});

customEmitter.on("myResponse2",()=>{
    console.log("some other logic here");
});

customEmitter.emit("myResponse","john",34);
//response name & parameters
customEmitter.emit("myResponse2");