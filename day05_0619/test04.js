// node js <-> js 
// npm 프로그램 설치 도구 : packge 메니저 역활
// http 모듈 내장 하고 있음 : 서버를 만들 수 있음 

const http = require('http');
const fs = require('fs');
const fsPromises = fs.promises;



//페이지가 매우 크다 문자열로 모두 처리할 순 없음 
// const server = http.createServer((request,response)=>{
//     fs.readFile('./test01.html','utf-8',(err,data)=>{
//         //console.log(data);
//         response.statusCode = 200;
//         response.setHeader('Content-type','text/html');
//         response.write(data);
//         response.end();

//     })
   
// });

const html = require('./views/template')
const server = http.createServer((require,Response)=>{
    //const data = fsPromises.readFile('./test01.html')
    //const data = fs.readFileSync('./test01.html','utf-8');

    const data = html('korea_it');

   // console.log(data);
           response.statusCode = 200;
           response.setHeader('Content-type','text/html');
           response.write(data);
           response.end();
})
const PORT = 3000;
server.listen(PORT,()=>{
    console.log('listening PORT',PORT)
});




