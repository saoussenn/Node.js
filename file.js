var fs = require('fs');
var path = require('path');

fs.readdir(process.arg[2], function (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.arg[3]) {
            console.log(file);
        }
    });
});