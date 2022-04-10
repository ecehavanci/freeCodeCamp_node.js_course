const fs = require("fs");

const first = fs.readFileSync('./folder/first.txt','utf-8');
const second = fs.readFileSync('./folder/second.txt','utf-8');

console.log(first);
console.log(second);

fs.writeFileSync(`./folder/result-sync.txt`, `My written data on result-snyc.txt is: ${first} , ${second} `);
