const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let count = 0;

const arr = ["apple", "banana","grape","blueberry","orange"];

for(let i=0; i<arr.length; i++){
    if(arr[i][2] === input || arr[i][3] === input){
        console.log(arr[i]);
        count++;
    }
}

console.log(count);