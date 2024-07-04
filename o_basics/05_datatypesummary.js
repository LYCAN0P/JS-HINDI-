//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedIn = false  //boolean
console.log(typeof isLoggedIn);
const outsideTemp = null  
console.log(outsideTemp);
//let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros);
let myobj={
    name: "aman",
    age: 22,
}
console.log(myobj);


const myfx=function()
{
console.log("hello");
}