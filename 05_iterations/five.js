
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val){
    // console.log(val);
})
//forEach is a array prototype and it demands a callback func
//callback func dont have a name and the parameter inside it gives the value in every iteration

coding.forEach((item)=>{ //callback func written as a arraow func and again no name
    // console.log(item);
})

function printMe(item){ //function created explicitly to be further used as a callback func
    console.log(item);
}
Print =(item)=>{ // as above only a arrow func 
    console.log(item);
}

// coding.forEach(Print); //only reference of the callback func is given not the execution(means no () after name)

// coding.forEach( (item, index, arr)=> {
// console.log(item, index, arr);//here it has access of item index and whole array every iteration
// } )

const myCoding = [ //here we have a array of objects and we ll iterate through it
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item)=>{
    console.log(`${item.languageName} & ${item.languageFileName}`)
})