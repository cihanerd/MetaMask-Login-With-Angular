var mongo = require('./mongo')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  mongo.getUsers()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post("/login", (req,res)=>{
    mongo.adduser();
    res.send('test message')
})

