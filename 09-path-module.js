const path = require("path");
console.log(path.sep); //The platform-specific file separator.   \

const filePath = path.join('/folder//', 'subfolder', 'file.txt');
console.log(filePath); //   \folder\subfolder\file.txt

const base = path.basename(filePath);
console.log(base);//   file.txt

const absolutePath = path.resolve(__dirname,"folder","subfolder","file.txt");
console.log(absolutePath);  //D:\themis\freeCodeCamp\folder\subfolder\file.txt   