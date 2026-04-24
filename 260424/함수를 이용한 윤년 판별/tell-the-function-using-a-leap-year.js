const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);
let answer = "false";

function isYun(year){
    if(year % 100 === 0 && year % 400 !== 0 )return false;
    if(year % 4 === 0) return true;    
    else return false;
}

if(isYun(y)){
    answer = "true";
}else answer = "false";



console.log(answer);