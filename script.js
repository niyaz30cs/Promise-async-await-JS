// function print(){
//     setTimeout(()=>{
//         console.log("Hii I am callback");
//     },1000)
// }
// function Display(print){
//     print();
// }
// Display(print);


// 2nd example

// function callback(){
//     console.log("callback function 2nd");
// }
// function sayname(gre){
//     console.log(`welcome to ${gre}`);
// }
// setTimeout(callback,2000);
// sayname("PrepBytes");


// 2nd que ans

// let num=0;
// setTimeout(()=>{
//     console.log(++num);
//     setTimeout(()=>{
//         console.log(++num);
//         setTimeout(()=>{
//             console.log(++num);
//             setTimeout(()=>{
//                 console.log(++num);
//                 setTimeout(()=>{
//                     console.log(++num);
//                     setTimeout(()=>{
//                         console.log(++num);
//                         setTimeout(()=>{
//                             console.log(++num);
//                         },7000);
//                     },6000);
//                 },5000);
//             },4000);
//         },3000);
//     },2000);
// },1000);

//Que- 3 ANS

// function isPrime(num){
//     return new Promise((resolve,reject)=>{
//         if(num<2){
//             reject("Number is greater than 2");
//         }
//         else{
//             for(let i=1;i<=Math.sqrt(num);i++)
//             {
//                 if(num%i===0)
//                 {
//                     reject("Number is not prime");
//                 }
//             }
//             resolve("Number is prime");
//         }
//     });
// }

// isPrime(7).then((result)=>console.log(result)).catch((error)=>console.log(error));

// 2nd code

// function result(alpha,timeout){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log(alpha);
//             resolve("Resolve Successfully");
//         }, timeout);
//     })
// }

// function vowel(){
//     result("A",2000)
//     .then(()=>result("E",3000))
//     .then(()=>result("I",4000))
//     .then(()=>result("0",2000))
//     .then(()=>result("E",7000))
// }
// vowel();
///3rd code


// new Promise((resolve,reject)=>{
//     if(false)
//     {
//         resolve("Resolved Successfully");
//     }
//     else
//     {
//         reject("Sorry");
//     }
// })

// .then((data)=>console.log(data)).catch((error)=>console.log(error));


// function print(){
//     setTimeout(()=>{
//         console.log("Hii PrepBytes");
//     },2000);
// }

// function display(data){
//     print()
// }
// display(print);

///que-5 ans

// setTimeout(()=>{
//     console.log("A");
//     setTimeout(()=>{
//         console.log("E");
//         setTimeout(()=>{
//             console.log("I");
//             setTimeout(()=>{
//                 console.log("O");
//                 setTimeout(()=>{
//                     console.log("U");
//                 },5000)
//             },4000)
//         },3000)
//     },2000)
// },1000)

    //q-6 ans

// new Promise((resolve,reject)=>{
//     resolve(10);
//     reject(20);
// })

// .then((data)=>console.log(data)).catch((error)=>console.log(error));

//2nd code  

// function promise(num){
//     return new Promise((resolve,reject)=>{
//         if(num==="yes")
//         {
//             resolve("Even");
//         }
//         else
//         {
//             reject("Odd");
//         }
//     })
// }

// promise("yes").then((data)=>console.log(data)).catch((error)=>console.log(error));
// promise(100).then((data)=>console.log(data)).catch((error)=>console.log(error));

///Q-7 ans--

// function display(num,timeout){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log(num);
//             resolve("Promise Resolve....!!");
//         }, timeout);
//     })
// }
// async function call(){
//     await display("A",2000);
//     await display("E",1000);
//     await display("I",4000);
//     await display("O",3000);
//     await display("U",5000);
// }
// call();


///q-8 ans--

// const promise1=new Promise((resolve,reject)=>{
//     let batch="EA22";
//     if(batch==="EA22")
//     {
//         resolve("Welcome to EA22 batch.");
//     }
//     else
//     {
//         reject("Bad Entry...!!");
//     }
// })

// promise1.then((data)=>console.log(data)).catch((error)=>console.log(error));

// const promise2=new Promise((resolve,reject)=>{
//     let roll=30;
//     if(roll===30)
//     {
//         resolve("Welcome back Niyaz Alam.");
//     }
//     else
//     {
//         reject("Incorrect Roll Number...!!");
//     }
// })

// promise2.then((data)=>console.log(data)).catch((error)=>console.log(error));

// const promise3=new Promise((resolve,reject)=>{
//     let id="EA3030";
//     if(id="EA3030")
//     {
//         resolve("Welcome to Successfull Register.");
//     }
//     else
//     {
//         reject("Wrong ID..!!");
//     }
// })

// promise3.then((data)=>console.log(data)).catch((error)=>console.log(error));

// Promise.all([promise1,promise2,promise3]).then((data)=>console.log(data)).catch((error)=>console.log(error));
// //By Using Spread---
// Promise.all([promise1,promise2,promise3]).then((data)=>console.log(...data)).catch((error)=>console.log(...error));

///q-9 ans--

function printNumbers() {
    let i = 1;
    const promise = new Promise((resolve, reject) => {
      const intervalId = setInterval(() => {
        console.log(i);
        i++;
        if (i > 7) {
          clearInterval(intervalId);
          resolve();
        }
      }, i * 1000);
    });
    return promise;
  }

  printNumbers().then((data)=>console.log(data)).catch((error)=>console.log(error));