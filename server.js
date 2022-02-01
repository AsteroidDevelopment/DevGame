const express = require('express');
const server = express();

//GD Cors
const cors = require('cors');
server.use(cors());

//Basic confirmation for connection.
server.get('/test', (req, res) => {
    res.send("Your API is successfully connected");
})

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

server.use(express.static('assets'))
server.use(express.static('src'))


//Finally actually start the server
const PORT = process.env.PORT || 4005
server.listen(PORT, () => { console.log("Server active.") });
