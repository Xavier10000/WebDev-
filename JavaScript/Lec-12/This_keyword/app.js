// Implicit binding
const person = {
    name: 'Kartik',
    age: 23,
    tellAge: function(){
        console.log(this);
    },
    favcolor:{
        name:'xyz',
        color: 'Blue',
        tellFavColor: function(){
            console.log(this);
        }
    }
}
// Explicit binding
function fun(name,age){
    console.log(this);
    console.log(name);
    console.log(age);
}
const a={
    l: 10,
    m: 20
}
fun.call(a,'kartik',23);
/*  OR to store this called value inside a variable for future use
    
    const f=fun.bind(a);



    now to call,

    f('kartik',25)
*/

