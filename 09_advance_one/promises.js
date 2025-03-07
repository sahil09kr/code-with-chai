// const promise1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("asyc task done");
//         resolve()
        
//     },5000)
    
// });

// promise1.then(()=>{
//     console.log("promise resolved");
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("async task2 done")
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("again resolved");
// })

// const promise3= new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("ho gya time");
//         resolve({username:"sahilkr09",email:"sahil@.com"})
//     },1000)
// })

// promise3.then((data)=>{
//     console.log(data);
// })

// const promise4=new Promise ((resolve,reject)=>{
//     error=true;
//     if(!error){
//         setTimeout(()=>{
//             console.log("ho gya time");
//             resolve({username:"sahilkr09",email:"sahil@.com"})
//         },1000)
//     }
//     else{
//         reject("something went wrong");
//     }
// })

// promise4.then((data)=>{
//     console.log(data);
//     return data.username;
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("Promise4 is either rejected or resolved");
// })

// async function consumePromise4(){
//     // const response=await promise4;
//     // console.log(response);
//     try{
//         const responce=await promise4;
//         console.log(responce);

//     } catch(error){
//         console.log(error);

//     } finally{
//         console.log("either tried and succesfull or OOPS!! error caught")
//     }
//similar to .then()->.catch()->.fianlly();
// }

// consumePromise4();


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))



// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((data)=>{
//     return data.json();
// })
// .then((data)=>{
//     return data.name;
// })
// .then((data)=>{
// console.log(data)
// })
// .catch((err)=>{
//     console.log(err);
// })

async function getData(){

    try{
    const gotit=await(fetch('https://api.github.com/users/hiteshchoudhary'))
    // console.log(gotit);
    const converted= await gotit.json();
    console.log(converted);
    }catch(err){
        console.log(err);
    }finally{
        console.log("kuch to hua hai resolve ya reject")
    }


}

getData();


