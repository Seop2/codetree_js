const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = input[0].split("").map(Number);

//모든 문자열 길이의 합
// 첫번째 문자로 'a'가 나오는 횟수


const arr = input.slice(1);
let sum = 0;
let count = 0;
for(let i=0; i<arr.length; i++){
    sum += arr[i].length;
    if(arr[i].startsWith('a')) count++;
}

console.log(sum, count);