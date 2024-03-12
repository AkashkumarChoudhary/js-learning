var c =300
let a = 400
if(true) {
    let a = 10 
    const b = 20
    var c =30
    console.log(a);
}
//  for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
//  }

console.log(a);
// console.log(b);
console.log(c);

// let or const scope ke sath ache tarike se kaam krte hai but var scope ke sath ache se kaam nai karta


function one(){
    const username = "akash"

    function two (){
        const website  = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

if (true ) {
    const username = "akash"
    if (username === "akash") {
        const website = " youtube"
        console.log(username +  website);
    }
    // console.log(website);
}
// console.log(username);
// +++++++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++++++++++++

//  Hoisting
//  Function V/S Expresssion
// /Function mai hum call ko function ke upar ka niche likh sakt ehai but
//  expression mai agar hum ye kare toh error aa jayega

console.log(addOne(5));

function addOne (num){
    return num +1;
}

console.log(addOne(5));


// console.log(addTwo(5));
const addTwo = function(num){
    return num +2;

}

console.log(addTwo(5));