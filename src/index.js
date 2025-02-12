const express = require("express")
const app = express()
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({ extended: true }));


app.use(express.static("public/"));

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
    res.render("contact.ejs")
})
app.get('/admission', function (req, res) {
    res.render("admission.ejs")
})

app.post('/submit', function (req, res) {
    console.log(req.body)


})



app.listen(30001, function (req, res) {
    console.log("Connected to PORT:3001")
})  
