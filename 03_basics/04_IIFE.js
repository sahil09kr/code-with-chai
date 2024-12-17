// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE as it conyains a name with it
    console.log(`DB CONNECTED`);
})(); // NOTE IIFE MUST END WITH A ;(semicolon) COZ THEY DONT KNOW WHERE TO END THEREFORE WE HAVE TO EXPLICITLY STOP IT WITH ;

//here func is wrapped inside () and then followed by () which means executed too

// THERE COULD BE SOME PROBLEM WITH GLOBAL SCOPE AND TO AVOID PROBLEM DUE TO GLOBAL POLLUTION WE USE IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('sahil')

//  just like chai("sahil");

//for declaration 2 IIFE it needs semicolon in between 
