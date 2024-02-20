

function sayMyName (){
console.log("A");
console.log("k");
console.log("A");
console.log("S");
console.log("H");
}

// function : Keyword
// sayMyName : Name
//  syntax: (){}
 
/* function sayMyName (){
    console.log("A");
    console.log("k");
    console.log("A");
    console.log("S");
    console.log("H");
    }
    */ 
    // syntax
    // sayMyName   : Reference
    // sayMyName( )  :execute
/*
sayMyName( ) 
A
k
A
S
H
*/

// function addTwoNumbers (number1, number2){
//    console.log(number1 +number2); 
// }

// addTwoNumbers(3 ,5);
// addTwoNumbers(3 ,null);
// const result = addTwoNumbers(3 ,5 );
// console.log("Result:" , result);
// jab hum function mai hum input dalte hai ()ke ander toh usse parameter but execution ke samai uuse argument bolte hai


function addTwoNumbers (number1, number2){
    // let result = number1 + number2 ;
    // return result;
    return number1 + number2;
 }

 const result = addTwoNumbers(3,6);
//  console.log("Results:" ,result);


function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("akash"));
// akash just logged in

function calculateCartPrice(...num1){
    return num1 ;
}
// console.log(calculateCartPrice(200, 300, 500, 2000));

// [ 200, 300, 500, 2000 ]

function calculateCartPrice(val1 , val2 ,...num1){
    return  num1 ;
}
console.log(calculateCartPrice(200, 300, 500, 2000));
// [ 500, 2000 ]

const user =  {
    username :"akash",
    price:500
}

function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}

handleObject(user);
// Username is akash and the price is 500