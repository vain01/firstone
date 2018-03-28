const fs = require('fs')
const filepath = 'logs';

fs.exists(filepath, function (exists) {
    if (!exists) {
        fs.mkdirSync(filepath)
        console.log("Created " + filepath + " successfully!!")
    } else {
        console.log(filepath + "is existed!!")
    }
})