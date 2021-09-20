const fs = require('fs');     //套件名稱只有兩個字fs

const data = {
    name: 'David',
    age: 26
};

fs.writeFile(
    'data.json', //檔名 如果想要在同一個資料匣裡生成資料>路徑要加__dirname +'/檔名 '
    JSON.stringify(data, null,4), //甚麼資料
    error=>{ //callback function，沒有錯誤給空值，有值給錯誤訊息:非同步方式必須藉由這個方式才能知道甚麼時候做完這個傳輸檔案的動作
        if(error){
            console.log('無法寫入檔案:',error);
            process.exit(); //結束程式
        }
        console.log('寫入成功');
    });
    // fs.writeFile('檔名',儲存的資料規格,callback function)