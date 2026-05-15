const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let result = "";
if(input.includes('ee')){
    result += 'Yes';
}else{
    result += "No";
}
result += " ";

if(input.includes("ab")){
    result += 'Yes'
}else{
    result += "No";
}

console.log(result);

