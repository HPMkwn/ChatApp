import express  from "express";
import dotenv from 'dotenv'

const port = 3000;

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', client => {
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});

app.get("/",(req,res)=>{
    res.send("Welcome to hhld");
});

server.listen(port, ()=>{
    console.log("Your app is running on 3000");
})
