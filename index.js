require('dotenv').config();/* 載入 .env設定 */

const { render } = require('ejs');
const express = require('express'); //把套件用進來

const app =express(); //把express當function使用(applocation)

// const urlencodeParser = express.urlencoded({extended:false}) //原本用法:bodyParser.urlencode但urlencoded功能有掛在express上所以直接用express就可，然後就會取得一個中介函式(middleware)
// const jsonParser= express.json();
// 跟urlencoded一樣需要解析器
app.use(express.urlencoded({extended:false}));
app.use( express.json() );
//設這樣就能把middleware變成top-level midd變成top-level middleware，進到所有路由之前都會通過的middleware

app.set('view engine','ejs'); //設定EJS樣板引擎set('key','value')

app.use('/',express.static('public')); //設置靜態內容檔案。這邊express當物件用的static(資料夾名稱)方法。最前方的/可省略因為public資料夾本來就在專案資料夾下第一層
app.use('/jquery',express.static('node_modules/jquery/dist/'));
app.use('/bootstrap',express.static('node_modules/bootstrap/dist/'));


// 路由定義開始位置 :BEGIN
app.get('/', (req, res)=>{

    res.render('home',{name:'littlelight'}); /* render('樣板',{傳到樣板的內容}) 樣板不用給相對路徑直接給檔名不用打副檔名*/
    
    // res.send(`<h2>Hello</h2>`)
});     
//設定路由定義設定根目錄要做甚麼反應 '/'是根目錄路徑,get是http的方法，設定的這個路由只能透過get方法
// res.send-可傳送1.一般文字(html)2.物件他會轉換成json字串(obj)3.buffer(我們不常用)4.用於傳送狀態碼
app.get('/json-sales', (req, res)=>{

    const sales = require('./data/sales');//因為是json檔所以附檔名不用寫，載入後他會自動把json檔轉成原生的陣列或物件，一旦require一次你之後去更改資料他網頁上顯示也不會更改，所以建議如果不會更動到的資料就集結成一起
    // console.log(sales);//這是在後端設定的所以前端不會看到東西
    // res.json(sales);
    res.render('json-sales',{sales});
});  
app.get('/try-qs', (req, res)=>{
    res.json(req.query);
    
});


app.post('/try-post',(req, res)=>{
    res.json(req.body);
    //然後把他加在路由路徑之後的位置app.post(路徑位置,中介函式處理進來的資料,處理器)
});  

app.get('/try-post-form', (req, res)=>{
    res.render('try-post-form');
    
});
app.post('/try-post-form', (req, res)=>{
    res.render('try-post-form',req.body); //把表單的body內容也放進來
    
});

app.get('/pending', (req, res)=>{
//如果沒有給一個callback 則一直處在等待狀態的意思
});
// 路由定義結束 :END

//設定404頁面，順序不能放在設定路由前面，不然大家一進根頁面都直接看到404 
app.use( (req, res)=>{
    res.status(404).send(`<h1>找不到頁面</h1>`)
});

let port = process.env.PORT || 3000;  //如果env沒有設定就跑3000那一埠號
app.listen(port,()=>{
    console.log(`NODE_ENV:${process.env.NODE_ENV}`);//這一條內容任意編輯
    console.log(`啟動:${port}`,new Date()); //這一條內容任意編輯
});  //偵聽