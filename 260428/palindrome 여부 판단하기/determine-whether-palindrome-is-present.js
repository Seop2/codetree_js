const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];

function ispalindrome(param){
    return param === param.split("").reverse().join("");
}

if(ispalindrome(str)){
    console.log("Yes");
}else {
    console.log("No");
}