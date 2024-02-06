// primitive datatype
//  7 types of primitive : String , Number , Boolean , null , undefined , symbol, BigInt 


// Reference (Non primitive)
// Array , Objects , Functions


//javascript is a dynamic type programming language

const score =100 ;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol ('123');
const anotherId = Symbol ('123');

console.log( id === anotherId);

const bigNumber =  346777698982522n ;


const heros = [ "shaktiman " , "nagraj " , "doga"];
let myObj= {
    name : "akash",
    age : "22"


}

 const myFunction = function (){
   console.log("hello akash"); 
}

// console.log(typeof  myFunction );

// console.log(typeof heros );

// console.log(typeof  myObj );

/*
D:\javascript\01-basics>node datatypes_summary.js
false
function
object
object
*/

//  ************************************************** memory ******************************************************************************

//  stack (primitive), heap (Non primitve )

 let  myYoutubename = "akcmumbai13579@gmail.com";


 let anothername = myYoutubename;
  anothername = "akcmum@gmail.com";
  console.log(myYoutubename);
  console.log(anothername);

  let userOne ={
    email : "bdgd@gmail.com",
    upi : "uswer@ipl"
  }

  console.log(userOne);

  let usertwo = userOne ;

  usertwo.email = "ahihdj@gmail.com";
  console.log(usertwo);

  /*
  false
akcmumbai13579@gmail.com
akcmum@gmail.com
{ email: 'bdgd@gmail.com', upi: 'uswer@ipl' }
{ email: 'ahihdj@gmail.com', upi: 'uswer@ipl' }
*/