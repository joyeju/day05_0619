//숫자인지 확인하는 함수 
const inNumber=(num)=>{
    if(Number.isNaN(num))
    console.log("true");
    else
    console.log("false")//숫자
    
    return !Number.isNaN(num);// !false //숫자
 }


const add = (num1 , num2)=>{
    if(!(isNumber(num1) || isNumber(num2))){
        return '숫자를입력하세요'
    }else{
        num1+num2;
    }
}

const sub = (num1 , num2)=>{
    if(!(isNumber(num1) || isNumber(num2))){
        return '숫자를입력하세요'
    
}return num1 - num2;
}

const mul = (num1 , num2)=>{
    if(!(isNumber(num1) && isNumber(num2))){
        return '숫자를입력하세요'
    
}return num1 * num2;
}

const div = (num1 , num2)=>{
    if(!(isNumber(num1) && isNumber(num2))){
        return '숫자를입력하세요'
    
}return num1 % num2;
}
module.exports = {add,sub,mul,div}


