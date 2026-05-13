const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const result = [];

for(let i=0; i<input.length; i++){
    result.push(input[i].length);
}

const answer = Math.max(...result) - Math.min(...result);
console.log(answer);