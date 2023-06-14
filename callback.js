

// console.log('star');
// setTimeout( function f (){
// console.log('timer is done');
// },3000);
// console.log('end');


// function cerateproimise() {
//     return new Promise(function executer(reslove,reject){
//         setTimeout(() => {
//             console.log("timer done");
//             reject(10)
//         }, 2000);
//     });
// }

// // console.log('start');
// // let x = cerateproimise();
// // console.log("got new a proimise");
// // x.then(function f(){
// //     console.log('then is done');
// // });
// // console.log('end');

// async function consume (){

//     try {
//         console.log('consume name');
//         const reponse = await cerateproimise();
//         const reponse1 = await cerateproimise();
//         console.log("value is ",reponse);
//     } catch (err) {
//         console.log('handel'.err);
//     }
   
// }
// console.log('star');
// consume()
// console.log('end');


// const proimiseOne =new proimise(function (reslove,reject) {
//     setTimeout(() => {
//         console.log("prpomse on way");
//         reslove()
//     },1000);
// });
// proimiseOne.then(function(){
//   console.log("consu,e ");
// });

// new Promise(function(resolve, reject)  {
//     setTimeout(function(){
//         console.log("async is co,m");

//         resolve()
//     },1000)
// }).then(function(){
//     console.log("adsas");
// })


// const proimiseThree= new Promise( function(resolve, reject) {
//     setTimeout(() => {
//         resolve({username:'aditya',emal:'aditya@123'})
//     }, 1000);
// });

// proimiseThree.then(function(us){
//         console.log(us);
// })


// const promiseFour = new Promise(function(reslove,reject){
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             reslove({username:'aditya'})
//         }else{
//             reject('error throw')
//         }
//     }, 1000);
// });
//  promiseFour.then((ad)=>{
//     console.log( ad,"reslove ans");
//  }).catch((err)=>{
//     console.log(err,'error is cm');
//  })
// const promiseive = new Promise(function(reslove,reject){
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             reslove({username:'aditya jain'})
//         }else{
//             reject('error throw')
//         }
//     }, 1000);
// });
  
// async function copromiseive() {
//      const reponse = await  promiseive
//      console.log(reponse);
// }
// copromiseive()

async function allget(){
const response = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = response.json()
   console.log(data);
}
allget()

// fetch('https://jsonplaceholder.typicode.com/users')
//  .then(function(reponse){
//     return reponse.json()
//  })
//  .then((data)=>{
//     console.log(data);
//  })
//  .catch((err)=>{
//     console.log(err);
//  })