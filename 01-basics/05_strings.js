const name = "akash";
const  repoCount = 50;

// console.log(name + repoCount + " Value");

// string interpollation

console.log(`Hello my name is ${name} and my repo is count is ${repoCount} `);

const gameName = new String('hitea-hh-c')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString  = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8 ,5);
console.log(anotherString);

/*
hite
hitea*/

const newStringOne = "    hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());
/*
    hitesh
hitesh*/

const  url = "https://akashkumar.com/akash%20choudhary";

console.log(url.replace('%20', '-'));
// https://akashkumar.com/akash-choudhary

console.log(url.includes('sundar'));
//  false 


console.log(gameName.split('-'));