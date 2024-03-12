const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
    //  console.log(key);
    // O/P: js
// cpp
// rb
// swift

// console.log(myObject[key]);
//  O/P: javascript
// c++
// ruby
// swift by apple

// console.log(`${key} is  shortcut for ${myObject.key}`);
}

const programming = [" js" , "ruby" , "py" ,"java"]

// for (const key in programming) {
//      console.log(key);
//      console.log(programming[key]);
// }

const map = new Map()
map.set("IN" , "India ")
map.set("UK","United KIndom")
map.set("Fr", "France")
map.set("IN" , "India ")


for (const key in map) {
    console.log(key);
}