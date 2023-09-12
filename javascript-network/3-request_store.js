#!/usr/bin/node
const url = process.argv[2];
const request = require('request');
const fs = require('fs');


const result = request.get(url, {encoding:'utf-8'});
    
if(process.argv > 2) {
    const path_to_store = process.agrv[3];
    result.pipe(fs.WriteStream(path_to_store));
}else {
    console.log(result);
}
    