const accountId = 144553 

let accountEmail = "Hitesh@gmail.com"
var accoutPassword = "12344"

accountCity = "Jaipur";
let accountState

accountEmail = "ankjsfks@gmail.com"
accoutPassword = "ab2333"
accountCity = "ranchi"
// accountId = 2; //not allowed because iska value ek 
//set hone ke baad change nai hota
console.log(accountId);
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accoutPassword, accountCity,accountState])

/*

 Output:  


D:\javascript\01-basics>node 01_variables.js
144553
┌─────────┬──────────────────────┐
│ (index) │ Values               │
├─────────┼──────────────────────┤
│ 0       │ 144553               │
│ 1       │ 'ankjsfks@gmail.com' │
│ 2       │ 'ab2333'             │
│ 3       │ 'ranchi'             │
│ 4       │ undefined            │
└─────────┴──────────────────────┘

*/