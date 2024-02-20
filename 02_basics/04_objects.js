// const tinderUser = new Object () // singleton object


const tinderUser = {} // non - singleton object
 tinderUser.id = "123abc"
 tinderUser.name = "akash"
 tinderUser.isLoggedIn = false 
//  console.log(tinderUser);
// { id: '123abc', name: 'akash', isLoggedIn: false }

const regularUser = {
  email: "akac@gmail.com",
  fullname : {
    userfullname : {
        firstname : "akash",
        lastName : "choudhary"
    }
  }
}

// console.log(regularUser.fullname.userfullname.lastName);

 const obj1 = {1 : "a" , 2 : "b"}
 const obj2 = {3 : "a" , 4 : "b"}
 const obj4 = {5 : "a" , 6 : "b"}

//  const obj3 = { obj1 , obj2}
// const obj3 = Object.assign({}, obj1 , obj2 ,obj4)
const obj3 = { ...obj1, ...obj2,...obj4}
//  console.log(obj3);

const users = [
  {
    id: 1 ,
    email: "akc@gmail.com",
  },
  {
    id: 1 ,
    email: "akc@gmail.com",
  },
  {
    id: 1 ,
    email: "akc@gmail.com",
  },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

/*
{ id: '123abc', name: 'akash', isLoggedIn: false }
[ 'id', 'name', 'isLoggedIn' ]
[ '123abc', 'akash', false ]
[ [ 'id', '123abc' ], [ 'name', 'akash' ], [ 'isLoggedIn', false ] ]
true
false
*/


//  Object KO Destructure kar rhe hai
const course = {
  coursename : "js with chai and code",
  price : "999",
  courseInstructor: " hitesh",
}


// course.courseInstructor

const {courseInstructor : instrructor } = course

// console.log(courseInstructor);
console.log(instrructor );

// react basics
/*
const navbar = ({company}) => {


}

navbar (company = "akash")
*/

// json
/*
{
  "name" : "akash" ,
  "course" :  "js in hindi",


}
*/

// api
