const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const [a, b] = input;

if(a.includes(b)){
    console.log(a.indexOf(b))
}else{
    console.log("No");
}