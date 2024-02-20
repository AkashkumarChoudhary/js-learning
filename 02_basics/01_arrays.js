//                    array

const myArr = [1, 2 , 3 , true , "akash"]
const myHeros = ["shaktiman" , "naagraj" ]

const myArr2 = new Array( 1 ,2 ,3 , 4)
// console.log(myArr[0]);

//  Array Methods

// myArr.push(3);
// myArr.push(5);
// myArr.pop()

// myArr.unshift(0);
// myArr.shift()

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(8));

const newArr = myArr.join()
 

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//    slice , splice
console.log("A",myArr);
const myn1 =myArr.slice(1,3);

console.log(myn1);
console.log("b" , myArr);
const myn2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);