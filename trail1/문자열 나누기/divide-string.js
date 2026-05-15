const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let strAll = input[1].split(" ").join("");

let str = "";

for(let i = 0; i<strAll.length; i++){
    str += strAll[i];
    if((i+1)% 5 ===0){
        str += "\n";
    }
}

console.log(str);