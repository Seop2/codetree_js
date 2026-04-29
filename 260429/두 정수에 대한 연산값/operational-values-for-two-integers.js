const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);

function solution(a,b){
    if(a > b){
        a += 25;
        b *= 2;
        
    }else if(a < b){
        b += 25;
        a *= 2;
    }
    console.log(a,b);
}
solution(a,b);