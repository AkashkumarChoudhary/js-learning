const marvel_heros = [ "thor" , "ironman" , "spiderman"]
const dc_heros = ["superman ", "flash" , "aquaman"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);


const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);
//  [ 'thor', 'ironman', 'spiderman', 'superman ', 'flash', 'aquaman' ]

const  allheros = [ ...marvel_heros ,...dc_heros]

// console.log(allheros);

const anotherArray = [1 , 2, 3,[4 ,5, 6] ,7 ,[6 ,7,[4, 5]]]

const real_another_array = anotherArray.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("akash"));
console.log(Array.from("akash"));
console.log(Array.from({name: "akash"}));// Interesting case

let score1 = 100;
let score2 = 200;
let score3 =300;

console.log(Array.of(score1 , score2 ,score3));