const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
const answer = [];
function solution(arr){
    for(let i=0; i<arr.length; i++){
        answer.push(Math.abs(arr[i]));
    }
}
solution(arr);
console.log(answer.join(" "));