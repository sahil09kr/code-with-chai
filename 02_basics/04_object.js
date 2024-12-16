
// const tinderUser = new Object() 
const tinderUser = {}

// the only diff bet declaration like above 2 is FIRST ONE IS SINGLETON AND THE SECOND ONE IS 
// NON SINGLETON
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//OBJECTS CAN BE THE KEY VALUE OF ANY OBJECT THAT IS CHANING IS ALL0WED

// console.log(regularUser.fullname?.userfullname.firstname);
//after fullname ? is used and it gives a protection that if fullname exist then only to go further

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
const obj9 = Object.assign({},obj1, obj2, obj4) 
console.log(obj1)
// here the empty object {} is the target and rest are the source that are addded in the target if empty object is not given then obj1 ll be the target and rest ll be the source

//when we take empty object as target then the original array is not changed else it changes

const obj3 = {...obj1, ...obj2}// spread operator its latest and ll be mostly used
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); 
//returns an array of keys of tinderUser

// console.log(Object.values(tinderUser));
// ...................values of..........
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// returns boolean T/F that is such property availabe or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor //this is the normal way of acessing the object prop

const {courseInstructor: instructor} = course
//above the word courseInstructor is replaced by instructor this is how object is destructured
//curly bracket  means destructuring

// console.log(courseInstructor);
console.log(instructor);
// NOTE:once the name is substituted then it cant be accesed via previous name

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

