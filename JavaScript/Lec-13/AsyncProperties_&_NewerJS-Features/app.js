

// function fun() {
//     console.log('Inside Fun');
// }

// // function delay(n) {
   

// //     for (let i = 1; i <= n; i++){
// //         const startTime = new Date().getTime();
// //         while (new Date().getTime() < 1000 + startTime) { }  
// //     }

// // }


// // console.log('START');

// // setTimeout(function cb() {
// //     let a = 100;
// //     console.log('Callback');
// //     fun();
// // }, 10000);

// // console.log('END');



// const id1 = setInterval(() => {
//     console.log('Inside set interval')
// }, 1000);


// const id2=setTimeout(() => {
//     clearInterval(id1);
// }, 5000);

for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    },i*1000);   
}
for (let j = 1; j <= 5; j++) {
    setTimeout(() => {
        console.log(j)
    },j*1000);   
}