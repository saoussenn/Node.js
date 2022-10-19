var moduleFile = require("./program.js");

moduleFile(process.arg[2], process.arg[3], function (err, data) {
data.forEach(function (file) {
console.log(file);
});
});
