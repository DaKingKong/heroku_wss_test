

const WebSocket = require("ws");

const start_message = {
    event: "START",
    metadata: {
        call_id: 111,
        session_id: 123,
        ani: "2223334444",
        dnis: "2223334444",
        account_id: "99990000",
        subaccount_id: "99990001",
        rc_account_id: "123456789",
        agent_id: 123,
        product_type: "QUEUE",
        product_id: 1234,
        encoding: "MULAW",
        sampleRateHertz: 8000
    }
}

const ws = new WebSocket('wss://hidden-lake-56415.herokuapp.com');

  ws.on('open', function open() {
    ws.send(JSON.stringify(start_message));
  });

  ws.on('error', function error(e) {
    console.log(e)
  });
