const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let result = "";
let count = 1;
for(let i=0; i<input.length; i++){
    if(input[i] === input[i+1]){
        count++;
    }else {
        result += input[i] + `${count}`;
        count = 1;
    }
}

console.log(result.length);
console.log(result);