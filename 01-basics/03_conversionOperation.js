                           
                           
                           // Lec 6 :    Datatype conversion confusion 

 let score = "33baa";
 
//  console.log(typeof score);
//  console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33" => 33
//"33abc"=> NaN (Not an Number)
//true => 1 ; falsee => 0

let isLoggedIn =1;

let booleanisLoggedIn = Boolean(isLoggedIn);
// console.log(booleanisLoggedIn);  

let someNumber = 22;

let stringNumber = String(someNumber);
// console.log(stringNumber);;
// console.log(typeof stringNumber);
/*
D:\javascript\01-basics>node 03_conversionOperation.js
string
string
number
NaN
true
22
string
*/

// ******************************************    Operation   *******************************************************

let value = 3;

let negvalue = -value 
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = " akash";

let str3 = str1 + str2 ;
// console.log(str3);


// console.log("1" +2);
// console.log(1 + "2");
// console.log("1"+2 +2);
// console.log(1+ 2+"2"); 
//console.log(+true);
// console.log(+" ");


let num1, num2, num3 ;
num1 = num2 = num3 = 2+2;

let gameCounter = 100;

gameCounter++;
console.log(gameCounter);