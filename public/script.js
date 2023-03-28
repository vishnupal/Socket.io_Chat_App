var socket = io();

let btn = document.getElementById('btn');

let inputMsg = document.getElementById('newmsg');
let msgList = document.getElementById('msglist');

btn.onclick = function exec() {
  socket.emit('msg_send', {
    msg: inputMsg.value,
  });
};
socket.on('msg_rcvd', (data) => {
  let list = document.createElement('li');
  list.innerText = data.msg;
  msgList.appendChild(list);
});
