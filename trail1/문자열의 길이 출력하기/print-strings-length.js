const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const answer = input[0].length + input[1].length;
console.log(answer);