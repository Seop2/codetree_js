const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0]; //입력 문자열
const pattern = input[1]; //목적 문자열


function solution(str){
    if(text.includes(str)){
        const result= text.indexOf(str);
        console.log(result);
    }else{
        console.log(-1);
    }
}

solution(pattern)
