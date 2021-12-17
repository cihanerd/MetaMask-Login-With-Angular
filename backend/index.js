var mongo = require('./mongo')
const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) =>  {
    var users = await mongo.getUsers();
  res.send(users)
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post("/login", (req,res)=>{
    mongo.upsertUser(null,{name:'testName', address:'testAddress'});
    res.send('test message')
})

