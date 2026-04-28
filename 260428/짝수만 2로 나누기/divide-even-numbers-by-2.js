const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
const answer = [];

function array(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0) answer.push(Math.floor(arr[i]/2));
        else answer.push(arr[i]); 
    }
}

array(arr);

console.log(answer.join(" "));