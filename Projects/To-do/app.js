
const btn= document.getElementById('btn');
const inp= document.getElementById('inp'); 
const list= document.getElementById('list');

btn.addEventListener('click',function(){
    let div = document.createElement("div");
    let btndel= document.createElement("button");
    let btnUp= document.createElement("button");
    let btnDown= document.createElement("button");
    let li = document.createElement('span');
    const todoText=inp.value;
    
    li.innerText= todoText;

    btndel.innerHTML='<i class="fas fa-trash-alt"></i>';
    btnUp.innerHTML='<i class="fas fa-caret-up"></i>';
    btnDown.innerHTML='<i class="fas fa-sort-down"></i>';


    btndel.onclick=function(){
        const parent = btndel.parentElement;
        parent.remove();
    }

    btnUp.onclick=function(){
        const parent = btnUp.parentElement;
        const sibling = parent.previousElementSibling;
        console.log(sibling);
        btnUp.parentElement.parentElement.insertBefore(
            parent,sibling)
    }
    
    btnDown.onclick=function(){
        const parent = btnDown.parentElement;
        const sibling = parent.nextElementSibling;
        console.log(sibling);
        btnDown.parentElement.parentElement.insertBefore(
            sibling,parent);
    }

    div.append(li);
    div.append(btndel);
    div.append(btnUp);
    div.append(btnDown);
    list.append(div);

    inp.value="";
})



// ____________________________________________
// Tweets
// const submit= document.getElementById('submit');
// const username= document.getElementById('username'); 
// const tweet= document.getElementById('tweet'); 
// const list= document.getElementById('tweets-list');

// function addList(username,tweet){
//     const li = document.createElement('li');
//     li.innerText= "Username->  "+ username + " Tweet->" +tweet;
//     list.append(li);
// }
// submit.addEventListener('click',function(){
    
//     const u=username.value;
//     const t=tweet.value;
//     addList(u,t);
//     username.value='';
//     tweet.value='';

// })