const obj = {x : 1, y :2}
const copyone = obj;
const copytwo = {...obj};
copyone.x = 'hello'

console.log(obj === copyone); //true
console.log(obj === copytwo); //false
console.log(obj);  //{x: 'hello',y :2}
console.log(copyone); // {x : 'hello',y :2}
console.log(copytwo); //{x :1, y:2}

const merge = {a :3 , b : 4, ...obj}
console.log(merge);

// Object.assign() : 객체복사
// Object.keys()   : 객체의 키값만 배열로 만든
// Object.values() : 객체의 value 값만 배열로 만든
// Object.entries(): {키ㅣvalue}배열로만듬 

const keys = Object.keys(merge);
console.log(keys)// 'a', 'b', 'x', 'y' ]
const values = Object.values(merge);
console.log(values);//[ 3, 4, 'hello', 2 ]
const entries = Object.entries(merge);
console.log(entries); //[ [ 'a', 3 ], [ 'b', 4 ], [ 'x', 'hello' ], [ 'y', 2 ] ]
const copyObj = Object.assign(merge);``
console.log(copyObj === merge); //true
console.log(copyObj); //{ a: 3, b: 4, x: 'hello', y: 2 }
// 다른 주소를 사용해서  원본이나 사본이 수정되엇을 때 서로 영향 없이 사용해야함
// 얕은 복사 : 영향이 있음

copyObj.a = 'javascript';
console.log(merge);
// 영향이 없도록 하기 위한 모듈 : __lowdash