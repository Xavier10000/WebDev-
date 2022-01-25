var a=100
function b(){
    console.log(a);
}
b();
// 
function c(){
    var d=200;
    function e(){
        console.log(d);
    }
    e();
}
c();
// ____ Block _________
{
    // Compound statement
    var x=100;
    let y=200;
    const z=300;
}
console.log(x);
console.log(y);
console.log(z);
