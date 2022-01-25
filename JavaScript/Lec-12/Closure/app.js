function fun(){
    var x=100;
    function innerFun(){
        x++;
        console.log(x);
    }
    return innerFun;
}
var f=fun();
f();
f();
f();
f();

// Eg-2-----------------------------------------------------------------------------
function authentication(){
    let username ='Akshit';
    let password = '1234';
    function login(inputName,inputPass){
        if(inputName===username && inputPass===password){
            console.log("Welcome to home page");
        }else{
            console.log("Wrong credentials");
        }
    }
    const loginAPI={
        login:login
    }

    return loginAPI;
}

const user= authentication();

user.login('Akshit','12345')

console.log(user);
