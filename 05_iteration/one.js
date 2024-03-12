//  for loop

// for (let i  = 0; i  < 10; i ++) {
//     const element = i ;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }
// console.log(element);

// for (let i = 0; i <10; i++) {
// console.log(`Outer loop value is ${i}`);
//     for (let j = 0; j < 10; j++) {
//         // console.log(`Ineer loop is ${j} and outer loop is ${i}`);
//         console.log(i + '*' + j + ' =' +  i* j);
//     }    
// }



// let myArray = ["flash" , "batman" , "superman"]

// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// +++++++++++++++++++++++++++++++++++++break and continue ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// for (let index = 1; index <20; index++) {
//     if (index == 5) {
//         console.log("Detected no is 5");
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
// }

// o/p:  Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected no is 5

for (let index = 1; index <10; index++) {
        if (index == 5) {
             console.log("Detected no is 5");
             continue
         }
        console.log(`Value of i is ${index}`);
        
     }
    

// O/P : Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected no is 5
// Value of i is 6
// Value of i is 7
// Value of i is 8
// Value of i is 9
