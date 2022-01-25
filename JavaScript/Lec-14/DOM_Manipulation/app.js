const image=document.querySelector('img');
  
function imgToggle() {
    let istrue=false;
    setInterval(() => {
        if(istrue){
            image.setAttribute('src','https://images.unsplash.com/photo-1640369406699-3ec89539e064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60');
        }else{
            image.setAttribute('src','https://images.unsplash.com/photo-1639883719305-bca8ce393ef0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60')
        }
        istrue=!istrue;

    },2000);
}
imgToggle();
