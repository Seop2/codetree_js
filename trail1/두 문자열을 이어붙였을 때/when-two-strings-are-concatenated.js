const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [A, B] = input;

console.log(A + B === B + A ? true : false);