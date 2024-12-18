
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject)
{
    console.log(key,':-',myObject[key]);
}
//NOTE :- FOR OF GIVES THE VALUE WHEREAS FOR IN GIVES US THE KEY

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); // Does not log anything because `Map` has no enumerable properties
// }

//Map implements an iterator interface. This means Map is designed to work with loops like for...of, which iterate over values returned by an iterator.
//for...in is not compatible with this mechanism

//for...in can't be applied to Map because it is designed for enumerating properties of objects, whereas Map is an iterable collection with its own iteration methods. The proper way to iterate over a Map is by using for...of, forEach, or the provided iterator methods like keys(), values(), and entries().