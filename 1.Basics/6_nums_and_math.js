const scoree = 400
//console.log(scoree);

const balance = new Number (100)
//console.log(balance);

//console.log(balance.toString.length);
//console.log(balance.toFixed(2));

const otherNum = 123.890086;
//console.log(otherNum.toPrecision(3));
//console.log(otherNum.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));


// **************************MAths  ***************************

// console.log(Math);
// console.log(Math.abs(4));
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.9));
// console.log(Math.min(2,5,3));

console.log(Math.random());// always come the value between 0 and 1
console.log((Math.random()*10) +1); // because of random value shifts towards left so, if the value is 0.1 then it will be 0 to avoid this , we can add 1 to this
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max =20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);