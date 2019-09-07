// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table DATA
// =============================================================
var tables = [
  {
    routeName: "table1",
    name: "costumer1",
    email: "uhdsa@gmail.com",
    uniqueID: "24723",
    mobile: "03472347382957"
  }
];

require("./routing/routingHTML")(app);
require("./routing/routingAPI")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
