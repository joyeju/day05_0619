// node js <-> js 
// npm 프로그램 설치 도구 : packge 메니저 역활
// http 모듈 내장 하고 있음 : 서버를 만들 수 있음 

const http = require('http');
const PORT = 3000;
//JSON 읽고쓰기

// const users = [
//     {first_name : "yeju",
//      last_name : "jo"
// }
// ]
// const server = http.createServer((request,response)=>{
//     response.statusCode = 200;
//     response.setHeader('Content-type','application/json');
//     // response.write(JSON.stringify(users));
//     // response.end();

//     response.end(JSON.stringify(users));
// });
const fs = require('fs')
const fsPromises = fs.promises
// const server = http.createServer((request,response)=>{
//         response.statusCode = 200;
//         response.setHeader('Content-type','application/json');
      
//         //const data = fsPromises.readFile('./model/user.json','utf-8')
//         const data = fs.readFileSync('./model/user.json')
       
//          response.end(data);
//     });

// server.listen(PORT,()=>{
//     console.log('listening PORT',PORT)
// });

const server = http.createServer(async(request,response)=>{
    response.statusCode = 200;
    response.setHeader('Content-type','application/json');
  
    //const data = await fsPromises.readFile('./user.json','utf-8')
    const data = fs.readFileSync('./user.json')
   await fs.writeFileSync('./my-data.txt',data);
     response.end(data);
});

server.listen(PORT,()=>{
console.log('listening PORT',PORT)
});





