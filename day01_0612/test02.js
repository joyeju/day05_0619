// 디스트럭쳐링
// 배열, 오브젝트의 구조를 깨서 내가 필요한 값으로 변환하는 문법

// let ary = [1,2,3];
// // let one = ary[0];
// // let two = ary[1];
// // let three = ary[2];

// let [one , two, three] = ary;
// // 순차적으로 꺼내야함  : 이터러블
// console.log(one,two,three);

const user ={
    name : 'jo',
    age : '32',
    subject : 'node.js'
}
// let Name = user.name;
// let age = user.age;
// let sub = user.subject;
const {name, age ,subject} = user;
console.log(name,age,subject);