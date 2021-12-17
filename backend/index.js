var mongo = require('./mongo')
const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/users', async (req, res) => {
    var users = await mongo.getUsers();
    res.send(users)

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.post("/users", jsonParser, (req, res) => {
    mongo.upsertUser(null, { name: req.body.name, address: req.body.address });
    res.send('user added')
})

