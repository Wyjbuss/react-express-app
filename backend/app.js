const express = require('express')

const port = process.env.PORT || 5000
const app = express()

app.get('/user',(req,res)=>{
    const data = [{color:"blue"}]
    res.json(data)
})

app.listen(port,()=>{
    console.log(`Server started on port: ${port}`);
})