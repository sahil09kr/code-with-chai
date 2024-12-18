
// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);
//forEach does not return anything 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums=myNums.filter((item)=>{
//   return item>4});
  //OR

  const newNums=myNums.filter((item)=>item>4) // THIS WILL SELF RETURN

  //NOTE=> when we ll use scope that is {} then we have to use the return key word and if we use it under paranthesis() only then it ll self return

console.log(newNums);
//filter actually filters out those data from array which follows a specific condition

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)  //this is how we can use forEach to store the required values
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
userBooks = books.filter((bk)=>{
  return bk.publish>=1995 && bk.genre==="History";
})
  console.log(userBooks);
