const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const a = input[0];
const b = input[1];

const arr = input.split("");

for(let i=0; i<arr.length; i++){
    if(arr[i] === a)arr[i] = b;
    else if(arr[i]=== b) arr[i] = a;
}

console.log(arr.join(""));