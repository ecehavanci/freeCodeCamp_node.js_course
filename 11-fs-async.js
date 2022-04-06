const fs = require("fs/promises");  // or require('fs').promises

const start = async () => {
    const first = await fs.readFile("./folder/first.txt", "utf-8");
    const second = await fs.readFile("./folder/second.txt", "utf-8");
    console.log(first, second);
}

start(); //?????