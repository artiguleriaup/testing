const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send("Welcome to the Home Page.")
})

app.listen(5000, ()=>{
    console.log("Server is running on 5000")
})