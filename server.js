const express = require('express');
const { resolve } = require('path');
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

  const { Server } = require('ws');

const wss = new Server({ server });

let streamingSessions = {};
let receive = ""
let transmit = ""
const recordingDirectory = resolve(__dirname, 'recordings');

try{
// Handle Web Socket Connection
wss.on("connection", function connection(ws) {
    console.log(`New Connection Initiated on port: ${PORT}`);

    ws.on("message", function incoming(message) {
        const msg = JSON.parse(message);
        console.log(msg);
        let streamingSession = {};
        switch (msg.event) {
            case "CONNECTED":
                console.log(`A new call has connected.`);
                break;
            case "START":
                console.log('Starting Media Stream');
                // streamingSession = {
                //     metadata: {},
                //     id: ""
                // };
                // streamingSession[websocket] = streaming_session
                // streaming_session["metadata"] = message["metadata"]
                // streaming_session["id"] = str(streaming_session["metadata"]["callId"]) + "-" + str(streaming_session["metadata"]["sessionId"])
                break;
            case "MEDIA":
                console.log(`Receiving Audio...`)
                break;
            case "STOP":
                console.log(`Call Has Ended`);
                break;
        }
    });
});

    
}
catch(e){
    console.error(e);
}