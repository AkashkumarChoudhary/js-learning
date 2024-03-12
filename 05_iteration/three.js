// for of

// ["" , "" , ""]
// [{} , {} , {}]

// const arr = [ 1, 2, 3, 4, 5]
// for (const num  of arr) {
//     console.log(num);
// } 

// const greeting =  "hello akash"

// for (const greet  of greeting) {
//     console.log(`Each character is ${greet}`);
// }

// Maps

const map = new Map()
map.set("IN" , "India ")
map.set("UK","United KIndom")
map.set("Fr", "France")
map.set("IN" , "India ")


// console.log(map);

// for (const [akash , value] of map) {
//     console.log(akash ,':-' , value);
// }

const akash = {
    'game1' : 'NFS',
    'game2' :'Spiderman'
}

for (const [key , value] of akash) {
    console.log(key   , ":-" , value  );
}