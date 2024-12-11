// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
//all these above comparision are simple as they are compares in same data type

// console.log("2" > 1); true as it converts it into numeric form
console.log("02" > 1);//true as it agin converted into 2

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true => because in case of comparision it converts it into no null changed into 0 therfore true

console.log(undefined == 0);
console.log(undefined > 0);//undefined is changed to NaN
console.log(undefined <= 0);
//therefore it gives false in all 3 cases
// === 

console.log("2" === 2);// the "==="(strict check) cpmpares both datatype and value
