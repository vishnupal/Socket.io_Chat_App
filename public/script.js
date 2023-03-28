var socket = io();

socket.on('from_server', () => {
  console.log('emit from server');
  const div = document.createElement('div');
  div.innerHTML = '<h1>New Emit happen</h1>';
  document.body.appendChild(div);

  socket.emit('from_client');
});
