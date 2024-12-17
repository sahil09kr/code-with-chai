
function sayMyName(){
    console.log('S');
    console.log('A');
    console.log('H');
    console.log('I');
    console.log('L');
}
//Functions are defined using the 'function' keyword followed by a name then () and a code block

//sayMyName()//=> sayMyName is reference and when () added then it is called

function addTwoNumbers(number1,number2){
    if(typeof(number1)=="number" && typeof(number2)=="number"){
        return number1+number2;
    } //typeOf returns a string therefore "number" ll be required
    else{
        return "unwanted datatype";
    }
    
}
console.log(addTwoNumbers(1,"3") );

// Parameters are the names used in the function declaration
// Arguments are the values passed to the function when it is called
// console log and return are 2 diff things when we ll directly call a return function then it will not give anything on the console coz its only returned not printed anything

//function loginUserMessage(username="user"){ =>in this case "user" is the default value if no argument passed
function loginUserMessage(username){
    if(!username){
        console.log("Please give your name");
        return;
    }
    else{
        return `${username} just logged in`;
    }
}
// console.log(loginUserMessage())

const user = {
    username : "sahil",
    price: 999
}
function tellMeAbout(users){
    console.log(`username is ${users.username} and cart price is ${users.price} `);
}
tellMeAbout(user);//here is passed as the object 
tellMeAbout({
    username : "suranjan",
    price : 9999
});
// we can declare the object inside argument too as done above 
// if the property is absent then we will get undefined
const array =[100,200,300,400]
function getSecondElement(userarray){
    return userarray[1];
}
console.log(getSecondElement(array));
console.log(getSecondElement([1,2,3,4]));
//just like above we directly gave an array in argumrnt

