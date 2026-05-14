const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const targetChar = input[n+1].trim();
const arr = input.slice(1, n + 1);

let sum = 0;
let count = 0;

for(let i=0; i<n; i++){
    if(arr[i].trim().startsWith(targetChar)){
        sum += arr[i].trim().length;
        count++;
    }
}

const average = (sum / count).toFixed(2);

console.log(count, average)