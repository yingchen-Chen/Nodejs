const f1 = a=>a*a;
const f3 = a=>a*a*a;

console.log(f1(a=7));
console.log('1:', __dirname );


// module.exports = f1; //匯出，而沒有匯出f3>f3只被定義在這個領域中
module.exports = {f1, f3}; //ES6 才有的一起兩個匯出