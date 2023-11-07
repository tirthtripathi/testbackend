// console.log("hello world")
require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hell World!')
})
app.get("/login", (req, res)=>{
    res.send('<h1> Please Login <h1>')
})

app.get('/joke',(req,res)=>{
    res.send('<h2>vivas are like arrange marriage you never know kesa jayega </h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})