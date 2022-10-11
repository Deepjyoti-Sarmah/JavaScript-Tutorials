//file system modules
//reading files, writting inside files
//perform calculations or modifications on the files
//text files
//reading a file

const fs = require("fs");

fs.readFile('demo.txt','utf-8' ,(err,data)=>{
    if(err){
        throw err.name;
    }
    else {
        console.log(data);
    }
})
