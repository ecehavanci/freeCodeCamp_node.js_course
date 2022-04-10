const operatingSystem = require("os");

console.log(operatingSystem.userInfo());  /*{
    uid: -1,
    gid: -1,
    username: 'eceha',
    homedir: 'C:\\Users\\eceha',
    shell: null
  }*/
console.log(operatingSystem.type());  //Windows_NT
console.log(operatingSystem.release());  //Returns the operating system as a string.
//10.0.19044