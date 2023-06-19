const http = require('http');
const server = http.createServer();
const PORT = 3000;

const fs =require('fs');
server.on('request',(req,res)=>{
    console.log('request')
    fs.readFile('./images/yuen.jpeg',(err,data)=>{
        res.setHeader('Content-type','image/jpeg');
        res.statusCode = 200;
        res.write(data)
        res.end();
    })
})
server.listen(PORT,()=>{
    console.log('listening PORT',PORT)
});




