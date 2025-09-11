const { Server } = require('socket.io')
const http = require('http')
const express = require('express')


const app = express();


const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4002",
        methods: ["GET", "POST"],
        credentials: true,
    }
})


// real time message code
const users = {}

const getReceiverSocketId = (receiverId) => {

    return users[receiverId];

}





io.on("connection", (socket) => {
    console.log("New Clinet connected", socket.id)
    const userId = socket.handshake.query.userId;
    const messages = socket.handshake.query.messages;

    // console.log(messages)

    if (userId) {
        users[userId] = socket.id;
        console.log("heelo", users)

    }



    // console.log(Object.keys(users))

    io.emit("getonline", Object.keys(users))
    socket.on("disconnect", () => {
        console.log("Clinet disconnected", socket.id)
        delete users[userId];
        io.emit("getonline", Object.keys(users))


    })



    const message = {}



    socket.on('user-messages', (message) => {
        console.log(message)



    })
})




// io.emit("getonline", Object.keys(users))


module.exports = { app, io, server, getReceiverSocketId }

