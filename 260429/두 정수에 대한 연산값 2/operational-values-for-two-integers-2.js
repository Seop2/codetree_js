const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

function solution(a,b){
    if(a > b){
        a *= 2;
        b += 10;
    }else if(a < b){
        a += 10;
        b *= 2;
    }
    console.log(a,b)
}

solution(a,b);