const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let sum = 0;
for(let i=0; i<input.length; i++){
    sum += input[i].length;
}

console.log(sum);