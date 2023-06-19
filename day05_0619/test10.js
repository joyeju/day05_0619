
const http = require('http');
const logEvents = require('./test09')
const server = http.createServer((req,res)=>{
    logEvents(`${req.method},${req.url}`);
});
const PORT = 3000;

let reqCount = 0;
server.on('request',async(req,res)=>{
    res.writeHead(200,{
        'content-type':"text/html;charset=utf-8"
    });
    res.end(`요청함,${++reqCount}`);


})


server.listen(PORT,()=>{
    console.log('listening PORT',PORT)
});

// 요청방식 : CRUD(create,read,update,delete)
// GET : read,게시판읽기
// POST : create,회원가입
// PUT,PATCH : update, 수정
// DELETE : delete, 장바구니내용 삭제, 회원탈퇴 

