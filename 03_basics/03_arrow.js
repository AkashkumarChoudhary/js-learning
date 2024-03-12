const user = {
    username : "akash",
    price : 999,

    welcomeMessage : function (){
        console.log(`${ this.username} , welcome to the course`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username= "hitesh"// contest 
// user.welcomeMessage()
//   console.log(this);

//    this broswer mai window printkarta hai , or node mai "{}'


// function chai (){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()


// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);
// }


const chai =  () =>{
    let username = "hitesh"
    console.log(this.username);
}

chai ()

// const addTwo = (num1 , num2) => {
//     return num1+ num2;
// } 

// const addTwo = (num1 , num2 ) => num1 +num2
 const addTwo = (num1 , num2 ) => (num1 +num2)
// const addTwo = (num1 , num2 ) => ({username : "akash"})


// upar mai 3 type se function ko declare kiya gya hai or ye tab ho skat hai jab return ek line ka ho

console.log(addTwo(3 , 4));