// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars Characters (DATA)
// =============================================================
var reservations = [{
  customerName: "Jane Doe",
  phoneNumber: "123-4567",
  customerEmail: "c@mail.com",
  customerID: "111"
}];

var waitlist = [{
  customerName: "Reserve Me",
  phoneNumber: "123-4567",
  customerEmail: "c@mail.com",
  customerID: "111"
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  
  res.sendFile(path.join(__dirname, "home.html"));

});

app.get("/view", function(req, res) {
  
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function(req, res) {
  
  res.sendFile(path.join(__dirname, "reserv.html"));
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/tables", function(req, res) {
  
  res.json(reservations);

});

app.get("/api/waitlist", function(req, res) {
 //show API of waiting list
 res.json(waitlist);
})


// Create New Characters - takes in JSON input
app.post("/reserve", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var newReservation = req.body;

  console.log(newReservation);

  // We then add the json the user sent to the character array
  reservations.push(newReservation);

  // We then display the JSON to the users
  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
