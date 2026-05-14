const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const result = [];
for(let i=1; i<input.length; i+=2){
    result.push(input[i]);
}

console.log(result.reverse().join(""))