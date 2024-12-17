const user={
    username : "sahil",
    price : 9999,
    welcomeMsg : function(){
        console.log(`${this.username},welcome here!`);
        //here this keyword represents the CURRENT CONTEXT.
        console.log(this);
    }
}
// user.welcomeMsg()
// user.username="suranjan";
// user.welcomeMsg()

//global object of node is empty object and global object of website console is window

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//this keyword is only defined in object not funcction 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () =>{
    let username="sahil";
    console.log(this.username);
}
//ARROW FUNCTION , no function keyword....it can be wrapped in a variable or without a keyword just like normal function


// chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2;
// }
// NOTE=> when arrow func is inside {} then return keyword is mandatory but when it is in () or even witout it then return keyword is not required

// const addTwo = (num1, num2) =>  num1 + num2 // no return keyword

// const addTwo = (num1, num2) => ( num1 + num2 ) // ........

const addTwo = (num1, num2) => ({username: "hitesh"})
//here an object is returned and should be wrapped inside a paranthesis () bracket


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()