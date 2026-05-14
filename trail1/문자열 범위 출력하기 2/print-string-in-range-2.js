const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const number = Number(input[1]);
const arr = input[0].split("").reverse();
const result = [];

for(let i=0; i<number; i++){
    result.push(arr[i]);
}
console.log(result.join(""));