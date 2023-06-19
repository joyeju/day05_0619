브라우저js
fetch
dom 



node Js 
fs
// eventEmitter : dom 없으니 클릭 불가, 시스템 끼리 서로 데이터 주고 받는 이벤트

const myEvent = require('evnet');
const myEvent = new EventEmitter();

myEvent.addListener('event01',()=>{
    console.log('event01 발생')
})

myEvent.emit('event01');//이벤트발생