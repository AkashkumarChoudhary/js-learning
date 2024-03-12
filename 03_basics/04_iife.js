// Immediately Invoked Function Expresssion (IIFE): hume global scope ke pollution se problem hoti hai toh hum global scope ke
// / pollution ko hatane ke ke iife ka use krte hai


(function chai (){
    // named iife
    console.log(`DB is connected`);
})();
// iife use arne ke baad hume " ; " ko lagan chahiye

( (name) => {
    console.log(`DB is connected two ${name}`);
})("akash");