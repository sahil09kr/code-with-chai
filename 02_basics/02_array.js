
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) 
// here dc_heroes is taken as a single data and a whole array as a 1 
// entity is pushed

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// PUSH ADDS IN THE SAME ARRAY 
// CONCAT RETURNS A NEW ARRAY AND ADD ELEMENTS OF ARRAY 1 BY 1 UNLIKE PUSH

const all_new_heros = [...marvel_heros, ...dc_heros]
// THIS IS A SPREAD OPERATOR WHERE EVERY ELEMENT OF THE ARRAY IS SPREADED AND ADDED
//it return a dataset without changing in the array used

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//infinity=>depth
// retturn an array with every element as a solo entity
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))// checks weather the given data is an array or not
console.log(Array.from("Hitesh"))//converts the guven data into array
console.log(Array.from({name: "hitesh"})) // interesting
//here the above returns an empty array because it is not specified tht from which it should make
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// returns a new array from a set of elements