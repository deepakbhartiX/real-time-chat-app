const dotenv = require('dotenv')
dotenv.config();

const mongodb = require('mongoose')

const express = require('express');
const app = express();

const { route } = require('./routes/user.sign.route.js');

const port = 8000 || process.env.PORT;


//connecting mongodb with backend

mongodb.connect(process.env.MONGOOSE_URL).then(
    console.log("connected to mongodb atlas")
).catch(error => console.log(`Mongoose Connection Error:${error}`));


//setting root '/' route

app.get('/', (req, res) => {
    res.send("heelo this is me backend Server")
})


//middlewares for user auth 

app.use(express.json())
app.use('/', route)


//listining port for backend server

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

