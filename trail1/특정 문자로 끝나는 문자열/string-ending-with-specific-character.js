const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const char = input[input.length - 1];
const result = [];
for(let i=0; i<input.length-1; i++){
    if(input[i].endsWith(char)) result.push(input[i]);
}

console.log(result.length > 0 ? result.join("\n") : "None");