//  if

const isUserLoggedIN = true;
const temperature =41;

// if(temperature === 41){
//     console.log("temperature  is less than 50" );
// }else {
//     console.log("temperature is greater than 50");
// }
// console.log("Hi hitesh");

//  < , > ,<= ,>= ,== ,!= , === , !==

const score = 200 ;

// if( score > 180){
//     console.log("Pass");
//     const power = "akash"
//     console.log(`my power is: ${power}`);
// }
// console.log(`my power is : ${power}`);


//  Implicit Scope 
const run =1000
// if( run > 500 ) console.log("enjoy");

const balance = 1000;

// if(balance <500 ) {
//     console.log("less than 500");
// } else if ( balance <750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else{
//     console.log("greater than equal to 1000");
// }

//  O/P : greater than equal to 1000

const UserLoggedIN = true ;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (UserLoggedIN && debitCard  ){
    console.log("Allow User to Login");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user Logged in");
}