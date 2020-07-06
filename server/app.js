const http = require('http')
const hostname = '192.168.100.4'
const port = 7839
const express = require('express')
const mongoose = require('mongoose')

const app = express()

// DB Config
const db = require('./config/keys').MongoURI

// Connect to Mongo
mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err)) 

// Bodyparser
app.use(express.urlencoded({ extended:false}))

//Routes
app.use('/', require('./routes/index'))

app.listen(port, hostname, () => {
    console.log(`Server is running  http://${hostname}:${port}`)
})