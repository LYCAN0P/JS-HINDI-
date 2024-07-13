// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// some time we got problem from global scope variables so to remove such type of polutions we use iife..

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')