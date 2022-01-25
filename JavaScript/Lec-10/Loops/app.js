/*  For loop
for(initilisation;condition;updation){
    work 
}
*/
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
// Increment and decrement
let n=0;
console.log(n++);
console.log(++n);
console.log(n);

/* while loop
while(condition){
    work
    updation
}
*/
let j=1
while(j<=10){
    console.log(j);
    j++
}

/* for....of loop*/
const fruits=['apple','mango','guava']
for (const fruit of fruits) {
    console.log(fruit);
}
// for..in loop
const car={
    name: "BMW",
    price: 100,
    color: 'Black'
}
for (const key in car) { 
        console.log(key);
}

// Pattern
n=+(prompt("Enter no of rows"))
for(i=0;i<n;i++){
    let str="";
    for(j=0;j<=i;j++){
        str+="*";
    }
    console.log(str);
}