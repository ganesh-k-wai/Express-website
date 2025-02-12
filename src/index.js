const express = require("express")
const app = express()
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({ extended: true }));
const path = require("path");
app.set('views', path.join(__dirname, 'views'));  // Ensure the path to the views folder is correct
app.set('view engine', 'ejs');


app.use(express.static("public/"));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
    res.render("home.ejs");
    // res.send("hellow wo")
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



app.listen(3001, function (req, res) {
    console.log("Connected to PORT:3000")
})  
