const http = require('http');  //此支寫入檔案要用Nodmon啟動
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'
    });


    fs.writeFile('headers.txt',//用json檔則server又會重新啟動一次所以用txt即可，nodemon會一直監聽JS JSON甚麼的格式
    JSON.stringify(req.headers,null,4),
    error=>{
        if(error){
           
            res.end(`<h1>錯誤: ,${error}}</h1>`);
        
        }else{
            res.end(`<h2>ok</h2>`);
        }

    });
  
});

server.listen(3000);

// req>用戶端發出需求
// res>伺服器端要發送給用戶端，使用end()方法 

// writeHead設定檔頭;裡頭寫--1.狀態碼---2.內容是甚麼type，預設是text/html