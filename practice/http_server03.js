require('dotenv').config();//會載入.env設定

const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    
    res.end(`<p>PORT: ${process.env.PORT}</p>`);
});
console.log(`PORT: ${process.env.PORT}`);
server.listen(process.env.PORT);

// req>用戶端發出需求
// res>伺服器端要發送給用戶端，使用end()方法 

// writeHead設定檔頭;裡頭寫--1.狀態碼---2.內容是甚麼type，預設是text/html