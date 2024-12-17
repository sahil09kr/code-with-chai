//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    //=> here in this block of code that is locally the value of a is 10 but outside this local chunk of code that is when we access globally then a is 300
    
}

// every curly bracket is a new local scope
//GLOBAL SCOPE => EVERYWHERE AVAILABLE
//LOCAL SCOPE => AVAILABLE IN A PARTICULAR BLOCK {}
// NOTE => LOCAL AND GLOBAL SCOPE IN NODE AND CONSOLE IS DIFFERENT

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); // here username will be accesed by coz it is under the outer scope
    }
    // console.log(website); // wont be accesed coz the upper scope where it was declared is closed

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);//=> no error coz both in scope
    }
    // console.log(website);//=> error...the upper to upper reason
}

// console.log(username);//=>error coz the scope where username took birth is already dead


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){ //here addOne func is declared independently
    return num + 1
}



addTwo(5)
const addTwo = function(num){ //here addTWo func is declared under a variable
    return num + 2
}
//therefore function declared independently are hoisted but function declared under a variable name is not hoisted.