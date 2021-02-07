const express = require('express')

const port = process.env.PORT || 5000
const app = express()

app.get('/hh',(req,res)=>{
    res.send('Backend works!')
    const color = "blue"
})

app.listen(port,()=>{
    console.log(`Server started on port: ${port}`);
})