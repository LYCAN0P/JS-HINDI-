const score = 40000
console.log(score);

const balance = new Number(100)
 console.log(balance);

console.log(score.toString().length);
 console.log(balance.toFixed(5));

const othernumber=23.8966;
console.log(othernumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
 console.log(Math.abs(-4));
 console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
// always in btw range of 0-1;

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 12
const max = 22
console.log("hello");
console.log(Math.ceil(Math.random() * (max - min +1))+min)
