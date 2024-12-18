
const myNums = [1, 2, 3]

//REDUCE => reduce(callbackFn)   if no initialvalue then assemed as 0
//          reduce(callbackFn, initialValue)
// Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn.
//callback func will have 2 parameters 1 is accumulator(initial value) and other ll be current value(on which the value iterates);
// ARRAY.REDUCE(CALLBACK FUNC(ACCUMULATOR,CURRENTVALUE),INITIALVALUE); =>SYNTAX


// const myTotal = myNums.reduce((acc,curr)=>{
//     return acc+curr;
// },0)

const myTotal=myNums.reduce(function (acc,curr){
    return acc+curr;
},0);

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay =  shoppingCart.reduce((acc,curr)=>{
    return acc+curr.price;
},0);

console.log(priceToPay);
