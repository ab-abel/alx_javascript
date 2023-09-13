const request = require('request');

const url = process.argv[2];

request.get(url)
    .on('response', response=>{
        console.log(`code: ${response.statusCode}`);
    })


const countBy = (arr, fn) =>
    arr.map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    },{});
        