var express = require("express")
var app = express()
var sequelize = require('./models/index').sequelize;


const PORT = 3000

app.use(express.static('public'));




sequelize.sync(); // database sync

app.listen(PORT,()=>{
    console.log("server on")
})
