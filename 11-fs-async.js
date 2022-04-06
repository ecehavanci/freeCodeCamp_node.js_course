
const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// const fs = require("fs/promises");  // or require('fs').promises
/* this was the first code belongs to async
const start = async () => {
    const first = await fs.readFile("./folder/first.txt", "utf-8");
    const second = await fs.readFile("./folder/second.txt", "utf-8");
    console.log(first, second);
}

start();*/

//the best one 
const start = async () => {
    try {
        const first = await readFilePromise("./folder/first.txt", "utf-8");
        const second = await readFilePromise("./folder/second.txt", "utf-8");
        await writeFilePromise(
            "./folder/result-sync.txt", `This is awesome: ${first} ${second}`
        );

        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start();

//the second approach
const getTextFunction = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}

getTextFunction("./folder/third.txt").then((result) => console.log(result)).catch((err) => console.log(err));