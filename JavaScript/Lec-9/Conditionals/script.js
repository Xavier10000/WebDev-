let a=10,b=20;

if(a<b){
    console.log("b is greater")
}

// Club age check______________________
let age=parseInt(prompt("Enter your age"));
if(age<18){
    alert("you cannot enter");
}else if(age<21){
    alert("you can enter but cannot drink");
}else{
    alert("You can enter and drink");
}
// check password______________
let pass=prompt("Enter password");
if(pass.length<6){
    alert("Password Invalid");
}else if(pass.indexOf(' ')!=-1){
    alert("Password Invalid");
}else if(pass.indexOf('$')!=-1 || pass.indexOf('#')!=-1 || pass.indexOf('@')!=-1){
    alert("Password Valid");
}else{
    alert("Password Valid");
}