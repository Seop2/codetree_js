const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let char = input[1];

let count = 0;

for(let i=0; i<input[0].length; i++){
    if(char === input[0][i]) count++;
}

console.log(count);