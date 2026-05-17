const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [A, B] = input;
//A : 입력 문자열
//B : 목적 문자열

if(A.includes(B)){
    console.log(A.indexOf(B));
}else{
    console.log(-1);
}