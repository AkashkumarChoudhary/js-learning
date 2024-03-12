const userName = "akaash"
const userEmail = [ ];
if(userName){
    console.log("got the userName");
}
else {
    console.log("don't get the userName");
}
//  falsy Value : falase , 0 , -0 , BigInt 0n , "" , null , undefined , NaN 

//  Truly  Value : "0" , 'false' , " value" , [ ] , { } , function(){}

if(userEmail.length === 0 ){
    console.log("Array is Empyt");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0 ){
    console.log("Object is empty");
}

// Nullish Coalescing OPerator (?? ) : null undefined

let val1;
// val1 =5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 10
val1 = undefined ?? 10 ??  30



console.log(val1);



// Ternary operator

// condition ? true : false

const iceTeaPrice  = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log(" more than 80");