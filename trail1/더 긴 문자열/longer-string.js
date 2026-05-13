const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

if(input[0].length === input[1].length) return console.log("same");
const answer = input[0].length > input[1].length ? input[0] : input[1];
console.log(answer, answer.length);