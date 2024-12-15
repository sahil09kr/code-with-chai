const score = 400//here JS automstically assumes it as a number as JS is a interpretted language
// console.log(score);

const balance = new Number(100) //specifically defined as number and we get some prototype properties with it
// console.log(balance); // here it is again a object

// console.log(balance.toString().length); //it first cahnges the number into string and now we can use all the string 
                                           //properties like.length, .charAt(2), .indexOf('0') etc

// console.log(balance.toFixed(2)); // it fixes the no of decimals after the number , here 100=> 100.00
//mostly used in E-commerce wwebsite where we dont want to see precision beyond a certain limit

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));
// it gives the no of digits after rounding it of in form of string if it is smaller than the no behind 
// decimal part then it gives in scientific notation
// "1.2e+7". => means 1.2 x 10 to the pow 7

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // it lets us to see the no of zeros in total with commas
// (hundreds.toLocaleString('en-IN')) => lets us see commas in indian form 1000000 => 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);  // its a object library with many in built functions
// console.log(Math.abs(-4)); // gives the absolute value
// console.log(Math.round(4.6)); // after rounding off
// console.log(Math.ceil(4.2)); // ceiling value even sloightly above then the no above it 
// console.log(Math.floor(4.9)); // floor value that is no behind decimal part
// console.log(Math.min(4, 3, 6, 8)); // minimimu value from array 
// console.log(Math.max(4, 3, 6, 8)); // maximum value from array

console.log(Math.random());  // gives a random value between 0 and 1
console.log((Math.random()*10) + 1); // when we want a no between 1 and 9
console.log(Math.floor(Math.random()*10) + 1); // now it takes only the integral part

const min = 10
const max = 20
// we defined the range under which we want the numbers to be 
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// now this formula ensures us that we will get a random no in the given range
// for example it could be used in the dice game