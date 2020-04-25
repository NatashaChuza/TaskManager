const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const userRoutes = require('./routes/api/User')
const mongoose = require('mongoose')
const passport = require('passport')

const app = express()

const port = 5000
const db = process.env.DB

mongoose.connect( db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    ()=> console.log("successfully connected to database")
).catch( err => console.log(err))

app.use(bodyParser.json())

//cors
app.use( (req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

//passport middleware
app.use(passport.initialize())

//passport config
require('./config/Passport')(passport)

app.use( '/api/users', userRoutes)

app.use((err, req, res, next) => {
    console.log(err);
    next();
  })

app.listen( port, ()=>{
    console.log(`Server is lisstening on port ${port}`)
})