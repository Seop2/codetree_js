const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

function hello(n){
    if(n === 0) return;
    console.log("HelloWorld");
    hello(n-1);
}
hello(n);