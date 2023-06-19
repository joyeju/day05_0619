// spread(전개)연산자
// 배열, 객체, 함수 구조를 꺠서 펼치는 용도

console.log([1,2,3]);
console.log(...[1,2,3]);

console.log('hello');//hello
console.log(...'hello');//h e l l o

const ary = [1,2,3];
// 최대값 구하기 
// Math.max(1,2,3)

let maxNum = 0;
ary.forEach(data =>{
    if(maxNum <= data){
        maxNum = data;

    }
})
console.log(maxNum);

Math.max(...ary);
const maxNum2 = Math.max(...ary);
console.log(maxNum2);

//같은 주소를 사용하므로 원본도 수정이 되거나 지워지거나 
//  function spreadHandle(rest){
//    rest[0]='hello' // [1,2,3];
//  }
 spreadHandle(...ary); //['hello',2,3]
 console.log(ary); // [1,2,3]

 const twoAry = ary;
 const threeAry =[...ary];
 ary[0] = 'javascript'
 console.log(twoAry) //['hello',2,3]
 console.log(threeAry); // [1,2,3]
 console.log(ary); //['javascript',2,3]

 console.log(twoAry === ary)
 console.log(threeAry === ary)
 