const express = require("express")
const app = express()
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({ extended: true }));
const path = require("path");
app.set('views', path.join(__dirname, 'views'));  // Ensure the path to the views folder is correct
app.set('view engine', 'ejs');


app.use(express.static("public/"));
app.use(express.static(path.join(__dirname, 'public')));

const nodemailer = require("nodemailer");


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




app.post("/submit", function (req, res) {
  console.log(req.body); // Log the form data to the console

  // Nodemailer setup
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "kadamg367637@gmail.com",
      pass: "uyod yiyi wylr ftrx",
      },
      logger: true,
      debug:true,
  });
    transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Server Error:", error);
  } else {
    console.log("SMTP Server is ready to take messages");
  }
});

  // Function to send email
  async function sendEmail() {
    try {
      const info = await transporter.sendMail({
        from: '"Ganesh Suresh Kadam" <kadamg367637@gmail.com>', // Sender address
        to: "kadamg2227@gmail.com", // Receiver address (can be dynamic based on the form)
        subject: "New Contact Form Submission", // Subject line
        text: `You have a new submission from ${req.body.p_name}. Here's the message: ${req.body.message}`, // Text body with form data
        html: `<b>You have a new submission from ${req.body.p_name}.</b><br><p>${req.body.email}</p><br><p>${req.body.p_mobile}</p><br><p>${req.body.p_address}</p>`, // HTML body
      });

      console.log("Message sent: %s", info.messageId);
      res.send("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Failed to send email.");
    }
  }

  sendEmail();
});


app.listen(3001, function (req, res) {
    console.log("Connected to PORT:3001")
})  
