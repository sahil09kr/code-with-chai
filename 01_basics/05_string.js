const name = "Sahil" //here type is string
const repoCount = 50

// console.log(name + repoCount + " Value");  THIS IS THE OUTDATED WAY OF MERGING

console.log(`Hello my name is ${name} and my repcount is ${repoCount}`); 
//this is the most reliable way of writing with ${} we can add stored within data

const gameName =new String('Sahil-6299') // here string is declared as a object...... type is object

// console.log(gameName[0]);
console.log(gameName.__proto__);  //{}


// console.log(gameName.length);// this gives the size of the string
// console.log(gameName.toUpperCase()); //change whole string to uppercase
// console.log(gameName.toLowerCase());// ..  ... .....     .....   lowercase
// console.log(gameName.charAt(2));//as name suggest
// console.log(gameName.indexOf('l'));//gives the index of that char

const newString = gameName.substring(0, 4)// includes the starting char index but excludes char at ending index
console.log(newString);//therfore the lenght of the substring will be (last - first)
//if begins from negative integer then it ll start from 0
const anotherString = gameName.slice(-8, 9)
// SLICE handles both positive and negative for example -1 ll will be the last char here, 
// the starting index loxation must be smaller than(not even equal) to the ending index then only we ll get 
// any logical sliced part otherwise the output ll be an emptty string
// just like .substr action slice ll also not include the last index character
console.log(anotherString);

const newStringOne = "   sahil    "
console.log(newStringOne);
console.log(newStringOne.trim()); //this trims the extra spces in front and last in the string

const url = "https://sahilkr.com/sahil%20kumar"

console.log(url.replace('%20', '-'))//replsces the availabe part with the second half

console.log(url.includes('sundar'))//checks weather this part is available in the string or not

console.log(url.split('/'));//gives an array of strings after spliting the string based on '/' the '/' is not included 
//anything between '/' and '/' will be included even if its empty;