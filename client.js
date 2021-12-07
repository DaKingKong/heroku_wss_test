

const WebSocket = require("ws");

const ws = new WebSocket('wss://hidden-lake-56415.herokuapp.com', {
    rejectUnauthorized: false
  });

  ws.on('open', function open() {
    ws.send('something');
  });

  ws.on('error', function error(e) {
    console.log(e)
  });
