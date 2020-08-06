var express = require("express")
var app = express()
const PORT = 3000

app.use(express.static('public'));


app.get("/",(req,res)=> {
    res.send("test response")
})

app.listen(PORT,()=>{
    console.log("server on")
})
