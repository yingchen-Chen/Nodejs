// const f1 = require('./arrow-func');
const {f1, f3: f4} = require('./arrow-func'); 如果要換名字則在後面放:
const f2 = require(__dirname +'/arrow-func');
//匯入兩次仍只會執行一次node，兩種路徑表示皆可f2是傳統寫法，f1是相對路徑寫法
console.log('2:',__dirname );
console.log(f1(a=9));
console.log(f3(a=10));

console.log(f2.f1(a=5));
console.log(f2.f3(a=5));
