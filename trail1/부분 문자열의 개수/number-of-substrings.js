const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [A, B] = input;

let count = 0;

for(let i =0; i<A.length; i++){
    if(A[i] === B[0] && A[i+1] === B[1])count++;
}

console.log(count);