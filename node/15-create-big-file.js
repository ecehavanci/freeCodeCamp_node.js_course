const { writeFile, writeFileSync } = require("fs");

for (let i = 0; i < 1000; i++) {
    writeFileSync("./folder/big.txt", `i is ${i}\n`, { flag: "a" });
}