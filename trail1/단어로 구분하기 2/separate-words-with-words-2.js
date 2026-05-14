const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const result = [];
for(let i=0; i<input.length; i+=2){
    result.push(input[i]);
}

console.log(result.join("\n"));