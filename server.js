const express = require('express')
const ConnectDB = require('./config/database');
const app = express()


// Middle ware
app.use(express.json())

// connect to databse
ConnectDB();

// routes
app.use('/',require('./routes/api/index'))

const port = process.env.PORT||5000

app.listen(port,(req,res)=>{
    console.log('server is running on port : 5000')
})