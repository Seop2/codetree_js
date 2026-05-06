const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let result = "";

function solution(n){
    if(n===0)return;
    result += "* ".repeat(n) + "\n";
    solution(n-1);
    result += "* ".repeat(n) + "\n";
}

solution(n);
console.log(result);