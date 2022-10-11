const fs = require("fs");
const path = require('path');
//loggingkeeps track of all functionality
fs.writeFile(path.join(__dirname, "newfile.txt"), "this is a new file , we are writing something",
(err) => {
    console.log('successfully writen to the file!!!');
    if(err){
        throw err.name;
    }
})

// console.log(__dirname);
// console.log(__filename);