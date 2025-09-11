const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors')
const mongodb = require('mongoose')

const express = require('express');


const { route } = require('./routes/user.sign.route.js');
const { messageroute } = require('./routes/message.routes.js')
const validatetoken = require('./jwt/validatetoken.js');

const {app,server,io} = require('./SocketIO/server.js')

const port = 8000 || process.env.PORT;

const cookieParser = require('cookie-parser')


//connecting mongodb with backend

mongodb.connect(process.env.MONGOOSE_URL).then(
    console.log("connected to mongodb atlas")
).catch(error => console.log(`Mongoose Connection Error:${error}`));

//middlewares for user auth 
app.use(cookieParser());
app.use(express.json())
app.use(cors())


// app.use(validatetoken)

app.use(route)
app.use(messageroute)


//setting root '/' route

app.get('/', validatetoken, (req, res) => {
    res.send("heelo this is me backend Server")
})

app.get('/login', (req, res) => {
    res.send("this is login")
})

app.get('/sign', (req, res) => {
    res.send("this is sign")
})


//listining port for backend server

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


