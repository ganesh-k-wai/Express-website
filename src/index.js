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
      pass: "xvpr pthr ojal zifu",
    },
    logger: true,
    debug: true,
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
        to: req.body.p_email, // Send to the applicant's email
        subject: "Thank You for Registering! - After School Program", // Subject line
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
            <div style="background-color: #4CAF50; padding: 15px; border-radius: 10px 10px 0 0; text-align: center; color: white;">
            <img src="/images/school_logo.png" height="30px" width="30px" alt="Nन्हे">
              <h2>Welcome to Our Pre-School Program!</h2>
            </div>
            <div style="padding: 20px;">
              <p>Dear <b>${req.body.p_name}</b>,</p>
              <p>Thank you for registering for our After-School Program. We are thrilled to have you join us!</p>
              <p><b>Details Provided:</b></p>
              <ul>
                <li><b>Email:</b> ${req.body.p_email}</li>
                <li><b>Mobile:</b> ${req.body.p_mobile}</li>
                <li><b>Address:</b> ${req.body.p_address}</li>
                <li><b>Address:</b> Your Application Number is <u>NEMS0002</u> </li>
              </ul>
              <p>Our team will reach out to you soon with further details.</p>
              <p>We look forward to an exciting journey together!</p>
              <p>Best Regards,</p>
              <p><b>Nन्हे English Medium School</b></p>
            </div>
            <div style="background-color: #4CAF50; padding: 10px; border-radius: 0 0 10px 10px; text-align: center; color: white;">
              <p>Contact Us: <a href="mailto:support@afterschool.com" style="color: white;">support@Nन्हे.com</a></p>
            </div>
          </div>
        `,
      });

      console.log("Message sent: %s", info.messageId);
      
      // Redirect to /contact with an alert
      res.send(`
        <script>
          alert("Form submitted successfully! Please check your email.");
          window.location.href = "/contact";
        </script>
      `);
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send(`
        <script>
          alert("Failed to send email. Please try again.");
          window.location.href = "/contact";
        </script>
      `);
    }
  }

  sendEmail();
});




app.listen(3001, function (req, res) {
    console.log("Connected to PORT:3001")
})  
