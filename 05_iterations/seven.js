const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums= myNumers.map((num)=>num+10);

const newNums = myNumers
                        .map((num)=>num*10)    //THIS IS KNOWN AS CHAINING 
                        .map((num)=>num+1)     //IN NUM => VALUE AFTER ANOVE OPERATION RESIDES
                        .filter((num)=>num>=41)//AS MANY AS WE CAN

console.log(newNums);


const newNums2 =[];
myNumers.forEach((num)=>{
    newNums2.push(num+10);
})
// console.log(newNums2);

// MAP => Returns a new array of the same length.
//        Does not modify the original array.
//        Useful when you want to transform data.

// FOREACH => Returns undefined.
//            Does not modify the original array unless explicitly done so within the callback.
//            Useful for side effects, like logging, updating UI, or modifying external variables.

// FILTER => Returns a new array.
//           Does not modify the original array.
//           Useful for filtering data based on conditions.