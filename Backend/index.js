const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors')
const mongodb = require('mongoose')

const express = require('express');
const app = express();

const { route } = require('./routes/user.sign.route.js');
const validatetoken = require('./jwt/validatetoken.js');

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

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

