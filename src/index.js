const express = require("express")
const app = express()



app.get('/', function (req, res) {
    res.send("hello world...!");
})
app.get('/about',function(req,res){
    res.render("/about.ejs")
})
app.get('/gallery',function(req,res){
    res.render("/gallery.ejs")
})

















app.listen(3000, function (req, res) {
    console.log("Connected to PORT:3000")
})  
