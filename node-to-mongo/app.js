//must install node, mongodb, mongoose, and express

var express = require("express");
var app = express();
var port = process.env.PORT;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connect to the database
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/data");

//Create database schema
var nameSchema = new mongoose.Schema({
 firstName: String,
 lastNameName: String
});

//Create a model for data
var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

//Create endpoint for form into database
app.post("/addname", (req, res) => {
 var myData = new User(req.body);
   myData.save()
     .then(item => {
       res.send("Name saved to database");
     })
     .catch(err => {
       res.status(400).send("Unable to save to database");
     });
});


app.listen(port, () => {
 console.log("Server listening on port " + port);
});