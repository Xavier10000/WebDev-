const btn = document.getElementById('btn');
const inp = document.getElementById('inp');


const socket = io();



btn.addEventListener('click', () => {
    const inputMsg = inp.value;
    socket.emit('send-msg', {
        msg: inputMsg
    });
    socket.on('send-acknowledge',(dat)=>{
        console.log(`${dat.msg}`);
    });
})










