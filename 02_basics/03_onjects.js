
// singleton
// Object.create// way to make singleton objects but will be discussed later

// object literals

const mySym = Symbol("key1")
// declaring a symbol to use in the object

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",       
    [mySym]: "mykey1",                     
    //this is the syntax to put value as symbol in object(interview question)             
    age: 18,                               
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// key(assumed as string) : value(can be any datatype)

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

//these were the sytax to access the object elements

JsUser.email = "hitesh@chatgpt.com"// this is how we can overwrite a object value
// Object.freeze(JsUser) //=>this freezes the value means it cant be changed further
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser); 

JsUser.greeting = function(){
    console.log("Hello JS user");  // FUNCTION IS ALSO TAKEN AS NORMAL 
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this. is a way to access properties of the used 
}                                               // object

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// AS ACCESING THE OBJECT PROPERTIES IS MOSTLY DONE BY THE DOT METHOD BUT SOMETIMES ACCESING IN SOME CASES CAN ONLY BE DONE THROUGH SQUARE BRACKETS AS USED ABOVE
