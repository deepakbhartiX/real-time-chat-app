const dotenv = require('dotenv')
dotenv.config();

const mongodb = require('mongoose')

mongodb.connect(process.env.MONGOOSE_URL).then(
    console.log("connected to mongodb atlas")
).catch(error => console.log(`Mongoose Connection Error:${error}`));




const express = require('express');
const { route } = require('./routes/user.sign.route.js');
const port = 8000 || process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    res.send("heelo this is me backend Server")
})


//middlewares 
app.use(express.json())
app.use('/', route)



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

