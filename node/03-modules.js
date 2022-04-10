const names = require("./04-constants.js"); //module
const sayHi = require("./05-utils.js"); //module
const data = require("./06-alternative-flavor.js"); //module

require("./07-mind-grenade"); //you can execute the folder also like this

sayHi("Foo");
sayHi(names.human1); //comes from names (05)
sayHi(names.human2);
sayHi(data.itemsArray);
sayHi(data.personExport); //object on its own
console.log(data.personExport.name); //objects data
