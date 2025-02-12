const express = require("express")
const app = express()



app.get('/', function (req, res) {
    res.render("home.ejs");
})
app.get('/about',function(req,res){
    res.render("about.ejs")
})
app.get('/gallery',function(req,res){
    res.render("gallery.ejs")
})
app.get('/contact', function (req, res) {
    res.send("contact.ejs")
})
app.get('/admission', function (req, res) {
    res.send("admission.ejs")
})
















app.listen(3000, function (req, res) {
    console.log("Connected to PORT:3000")
})  
