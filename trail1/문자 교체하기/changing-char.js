const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = input;

const aArr = a.split("");
const bArr = b.split("");
bArr[0] = aArr[0];
bArr[1] = aArr[1];



console.log(bArr.join(""));