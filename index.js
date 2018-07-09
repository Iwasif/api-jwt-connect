const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const expressjwt = require("express-jwt")

const app = express ()
app.use(bodyParser.json())

const PORT =  process.env.APIPORT|| 3031

var jwtchecker= expressjwt({
  "secret":"helldeop"
})


app.get('/',  (req, res) => {
    res.send('hello express ')
})

app.get('/secured',jwtchecker,(req, res) => {

     let user= req.user
    res.send(`hello ${user.user} welcome to secured info`)
})

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
   })