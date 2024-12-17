
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values =>these are the values that are preassumed as false

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values =>all values that are not falssy are true
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { //Object.keys(emptyObj)=>returns an array of object keys
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
//these are mostly used when we dont want to allow it to be declared as null or undefined


console.log(val1);

// Terniary Operator

// condition ? true : false 
//if condition will be true then first code chunk will be executed else the second chunk
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
