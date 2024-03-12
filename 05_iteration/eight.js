const myNums = [1, 2, 3, 4,5]

// const newNum = myNums.reduce(function(acc ,currval){
//     console.log(`value of acc${acc} and value of currval${currval}`);
//     return acc+ currval
// },0)

// const newNum = myNums.reduce( (acc ,currval)=>{
//     console.log(`value of acc${acc} and value of currval${currval}`);
//     return acc+ currval
// },0)

// console.log(newNum);

const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "python course",
        price: 999
    },
    {
        itemName : "app course",
        price: 5999
    },
    {
        itemName : "data science course",
        price: 2999
    },
]

const shop = shoppingCart.reduce((acc,item )=> acc +item.price  ,0)
console.log(shop);