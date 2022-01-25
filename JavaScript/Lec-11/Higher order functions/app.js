function fun(func){
    func();
}
function innerfunction(){
    console.log("Inside fun");
}
// ___________________ Application of HOF_____________________
function greaterThan(n){
    return m => n>m;
}
const greaterThan10 = greaterThan(10);
let greaterThan20 = greaterThan(20);