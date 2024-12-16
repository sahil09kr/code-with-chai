// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // adds an element from 0th place
// myArr.shift() //removes an elemnt from 0th place

// console.log(myArr.includes(9)); //=>boolean true/false
// console.log(myArr.indexOf(3));  //=>as name suggest if index invalid then ans -1

// const newArr = myArr.join(',') //myArr.join('char to join'); 
// creates and returns a string that is converted from an array 
// NO MODIFICATION IN ORIGINAL ARRAY

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);      // SLICE=> no modification in original array
                               //      => returns a new sliced array from first index to before    
                               //         last index  
                               //      

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);    // we can see that the original array is not changed


const myn2 = myArr.splice(1,1) //SPLICE =>array.splice(startIndex, deleteCount, item1,       
// myn2 contains array of removed elements                    item2, ...);
//=>from (startIndex) delete (deletecount elements) and add items(item1,item2) in the original array                      
// deletecount and items are optional          
// Purpose: Modifies the original array by removing, replacing, or adding elements.
// Returns: An array of the removed elements.
console.log("C ", myArr);
console.log(myn2);
