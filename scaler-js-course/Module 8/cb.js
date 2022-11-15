const fs = require('fs')

console.log('First Line');


fs.readFile('f1.txt', cb1)

function cb1(err,data){
    if(err){
        console.log(err)
    }
    console.log('File 1 data' + data);
}


fs.readFile('f2.txt', cb2)

function cb2(err,data){
    if(err){
        console.log(err)
    }
    console.log('File 1 data', +data);
}