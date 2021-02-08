const express = require('express')

const port = process.env.PORT || 5000
const app = express()

app.get('/hi',(req,res)=>{
    const data = []
    data.push({color:"yellow"})
    res.send(data)
})

app.listen(port,()=>{
    console.log(`Server started on port: ${port}`);
})