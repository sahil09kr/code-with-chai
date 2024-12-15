// Dates

let myDate = new Date()    // decalred as a object
// console.log(myDate.toString()); // readable syntax with all day, date and time
// console.log(myDate.toDateString()); // only with day and date
// console.log(myDate.toLocaleString());// numerc from of date
// console.log(typeof myDate); // its an object

// NOTE => january is 0 & december is 11

// let myCreatedDate = new Date(2023, 0, 23) //(denoted as (year,month,day));
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)// here after above time is also defined
// let myCreatedDate = new Date("2023-01-14")// when dealed with string here jan starts from 01
let myCreatedDate = new Date("01-14-2023") 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //gives total milisec from jan 1,1970

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));// toal sec from jan 1,1970

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);//as the name suggest
console.log(newDate.getDay());//...............

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",            // these are the manipulations done by the libraried which further ll be  discussed
    
})