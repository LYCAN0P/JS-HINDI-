//var c=40;  // this is global scope

let a =90;
if(true)
{                    // this is local/ block scope
    let a=10;
const b=-9;
   var c =3;
   console.log("inner : " ,a )
}

// console.log(a);
// console.log(Math.abs(b));
console.log(c);

function one()
{
const username="aman";

function two()
{
    const website = "youtube";

    console.log(username);
    console.log(website);
}
//console.log(website);
two();

// there is a rule that small one can access big one all variable like function two can access function one variable but one cant access small ones variables


}
one()


function addone (num)
{
return num+1;
}

console.log(addone(4));
console.log(addtwo(4));
const addtwo = function(num){
    return num+2;
}

