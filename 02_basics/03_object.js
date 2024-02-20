//  singleton:  => if we declare it like literals then it will not make singleton
//  singleton will be made by constructor


//  Object Literals 
// Object.create  //this is called constructor method
    
const mySym = Symbol("Key1")


// Object Literals
const JsUser = { 
    // curly braces of object
    "Full name" : "akash kumar Choudhary",
     name : " akash",
     [mySym] : "myKey1",
    age :  22 , 
    location : "ranchi", 
   email  : "alcmumbai13@gmail.com",
   isLogged : false ,
   lastLogginDays  : [ " Monday " , " Friday"]
 }

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);

// console.log( JsUser[mySym]);
// console.log(typeof JsUser[mySym]);
JsUser.email = "pagalduniya.com"// "." dot lagake hum object ko accesss kar rhe hai 
// Object.freeze(JsUser);// iss line ko likhne ke baad hum object mai changes nai kar sakte hai
JsUser.email = "madworld.com"
// console.log(JsUser);

/*  => output
{
  'Full name': 'akash kumar Choudhary',
  name: ' akash',
  age: 22,
  location: 'ranchi',
  email: 'alcmumbai13@gmail.com',
  isLogged: false,
  lastLogginDays: [ ' Monday ', ' Friday' ],
  [Symbol(Key1)]: 'myKey1'
}
alcmumbai13@gmail.com
alcmumbai13@gmail.com
akash kumar Choudhary
myKey1
string
{
  'Full name': 'akash kumar Choudhary',
  name: ' akash',
  age: 22,
  location: 'ranchi',
  email: 'pagalduniya.com',
  isLogged: false,
  lastLogginDays: [ ' Monday ', ' Friday' ],
  [Symbol(Key1)]: 'myKey1'
}
*/
 //object ki value ko hum dot"." notation se access karte hai


 JsUser.greeting = function(){
    console.log("Hello js user");
 }


 JsUser.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`);
 }

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());

 /*
 D:\javascript\02_basics>node 03_object.js
Hello js user
undefined
Hello js user ,  akash
undefined
*/