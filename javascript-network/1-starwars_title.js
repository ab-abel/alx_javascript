#!/usr/bin/node

// import request module
const req = require('request');

// get id from terminal
url = `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`;

// the n
req.get(url, {encoding: 'utf-8'})
    .on('data', data => {
        const resp = JSON.parse(data);
        console.log(resp.title);
    })