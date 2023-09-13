#!/usr/bin/node
const url = process.argv[2];
const request = require('request');
const fs = require('fs');


request(url, {encoding:'utf-8'});
    result.pipe(fs.createWriteStream(process.argv[3]));
