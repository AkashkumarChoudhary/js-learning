//                               Dates



let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

/*
D:\javascript\01-basics>node 07_dates.js
2024-02-07T18:18:32.521Z
Wed Feb 07 2024 23:48:32 GMT+0530 (India Standard Time)
Wed Feb 07 2024
2/7/2024, 11:48:32 PM
object*/


// let myCreateDate = new Date( 2023 , 0 ,23 , 5 ,3 )
// let myCreateDate = new Date("2023-11-12")
let myCreateDate = new Date("12-23-2024")

//  console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate= new Date ();
console.log(newDate.getDay());

console.log((newDate.getMonth() +1) );

`${newDate.getDate()} and the last time `

newDate.toLocaleString('default' , {
    weekday : "long",
})