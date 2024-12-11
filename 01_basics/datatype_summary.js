//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

//null is basically a empty value means in the memory the space is reserved but empty and it is a object
//undefined is a case where memory is decalared but it is not defined about the value and it is a special undefined type

const score = 100
const scoreValue = 100.3
//IT IS A INTERPRETED AND DYNAMIC LANG AS PREDEFINED DATATYPE CAN BE CHANGED
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//SYMBOL BASICALLY WRAPS A THING THAT MUST BE UNIQUE AND INTERPRETED AS UNIQUE 

console.log(id == anotherId);//false=>because 2 symbols can never be same

// const bigNumber = 3456543576654356754n

//*****  THE DIFF BET PRIMITIVE AND NON PRIMITUE(refernce type) IS BASED ON HOW THE DATATYPE IS STORED AND ACCESED 
// IN THE MEMORY; PRIMITIVE IS CALL BY VALUE AND NON PRIMITIVE IS CALL BY REFERENCE

// ***** IF ONE NEEDS TO BE A EXPERT IN JS THEN MASTER 2 THINGS... 1=> OBJECTS AND 2=> WEB EVENTS(changes needed to be done 
//  when any action is taken from the user side like click, reload, scroll, etc);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  //ARRAY
let myObj = {
    name: "hitesh",         //OBJECT ALWAYS INSIDE A " { } ";
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");     //FUNCTION defined with the key word function() and then { }
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3