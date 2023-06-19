const {format} = require('date-fns');

const today = new Date();
console.log(today);
const todayFormat = format(today,'yy-MM-dd \t hh:mm')
console.log(todayFormat);

//npm i 모듈명 // 설치
//node 가 npm을 처리 =>패키지 관리 역활 
