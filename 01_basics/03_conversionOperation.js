let score="32rdf"
console.log(typeof score);//string
let valueInNumber=Number(score) //converts the score in number if it is convertable
console.log(typeof valueInNumber)//number
console.log(valueInNumber)

//"33"=>33
//"33rdf"=>NaN(short form of not a number)...but NaN is type of number only
//null=>0
//true=>1 ; false=>0

let isLoggedIn=" "
let booleanIslIn=Boolean(isLoggedIn)
console.log(typeof booleanIslIn)//boolean
console.log(booleanIslIn)

//""=>false ; "anything"=>true
//0=>false ; -1,1,(any no other than 0)=>true
 

///////////**************OPERATIONS ***********************//////////////////////

//simple arithmetic operations are similar to C++
console.log(2+"3") //"23"=>here 2 treated as string
console.log(2+"3"+3)//"233"=>here its more like the one which comes first 
console.log(2+3+"3")//53=>as above first the addition ll happen as it comes b4 string concanetattion 
// in marketplace it is completely unacceptable to code like this as it creates unnecessary confusion...so use brackets instead

console.log(+true)//1;
// console.log(true+)//true+...vice versa in case of false;
// console.log(+true);
console.log(+"");//0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
console.table([num1,num2,num3])

