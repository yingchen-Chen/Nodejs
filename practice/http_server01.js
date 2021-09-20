const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    
    res.end(`<h1>hola ,${req.url}</h1>`);
});

server.listen(3000);

// req>用戶端發出需求
// res>伺服器端要發送給用戶端，使用end()方法 

// writeHead設定檔頭;裡頭寫--1.狀態碼---2.內容是甚麼type，預設是text/html