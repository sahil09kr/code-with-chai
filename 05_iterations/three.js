const arr=[1,2,3,4,5];
for (const val of arr) { //this is a for of loop (const element of object) here element is iterator
    console.log(val);    //object above means on which datatype loop will iterate
}
// for of => cant be applied on objects

// ["", "", ""]
// [{}, {}, {}]

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps =>object which remembers key and value and it also remembers the position of them

const map =new Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('FR',"France")
// console.log(map);
for (const [key,value] of map) {
    // console.log(`${key} :- ${value}`)
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { //this cant be iterated with for of
//     console.log(key, ':-', value);
    
// }
