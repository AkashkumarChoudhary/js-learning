// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);


// the reason is that an equality check == and comparisons > < >=
//  <= work differently.
// Comparsion convert null to a number ,treating it a s0 .
//  That 's why nnull >= 0 is true and null > 0 isfalse


// console.log(null > 0 );
// console.log(null == 0);
// console.log(null >= 0);


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);

// === strict check (for checking for datatype)

console.log("2" === 2);