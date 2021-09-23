const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const socket = require('socket.io')
const io = socket(server)
const username = require('username-generator')
const path = require('path')
const cors = require('cors')
const uuidV4 = require('uuid').v4
const { AwakeHeroku } = require('awake-heroku');

app.use(express.static('./client/build'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/join', (req,res) => {
    res.send({ link: uuidV4() })
})

app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "client","build","index.html"));
})

const users={}

io.on('connection', socket => {
    //generate username against a socket connection and store it
    const userid=username.generateUsername('-')
    if(!users[userid]){
        users[userid] = socket.id
    }
    //send back username
    socket.emit('yourID', userid)
    io.sockets.emit('allUsers', users)
    
    socket.on('disconnect', ()=>{
        delete users[userid]
    })

    socket.on('callUser', (data)=>{
        io.to(users[data.userToCall]).emit('hey', {signal: data.signalData, from: data.from})
    })

    socket.on('acceptCall', (data)=>{
        io.to(users[data.to]).emit('callAccepted', data.signal)
    })

    socket.on('close', (data)=>{
        io.to(users[data.to]).emit('close')
    })

    socket.on('rejected', (data)=>{
        io.to(users[data.to]).emit('rejected')
    })
})

const port = process.env.PORT || 8000

server.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})