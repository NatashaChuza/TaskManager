const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const userRoutes = require('../routes/api/User')
const taskRoutes = require('../routes/api/Task')
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')

const app = express()

const port =process.env.PORT || 5000
const db = process.env.DB

mongoose.connect( "mongodb+srv://natasha:1234@fullstack-ukqsp.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology:true
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
require('../config/Passport')(passport)

app.use( '/api/users', userRoutes)
app.use('/api/tasks', taskRoutes)

app.use((err, req, res, next) => {
    console.log(err);
    next();
  })

  //serve static files if in production
  if(process.env.NODE_ENV === 'production'){
      //set static folder
      app.use(express.static('client/build'))

      app.get('*', ( req, res ) =>{
          res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
      })
  }

app.listen( port, ()=>{
    console.log(`Server is lisstening on port ${port}`)
})