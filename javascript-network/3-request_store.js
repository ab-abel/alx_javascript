#!/usr/bin/node

const url = process.argv[2];

const path_to_store = process.agrv[3];

const request = require('request');
const fs = require('fs');

request.get(url, {encoding:'utf-8'})
    .pipe(fs.createWriteStream(path_to_store));