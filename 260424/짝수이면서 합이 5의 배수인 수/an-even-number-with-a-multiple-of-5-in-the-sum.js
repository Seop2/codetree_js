const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
let answer = "No";

function isEven(n){
    return n % 2 ===0 ? true : false;
}

if(isEven(n)){
    let x = Math.floor(n / 10);
    let y = n % 10;
    
    let sum = x + y;
    if(sum % 5 === 0) answer = "Yes";
    else answer = "No";
}

console.log(answer);
