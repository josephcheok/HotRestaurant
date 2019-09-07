// dependencies
var tables = require("../data/tables");
var waitlist = require("../data/waitlist");

function routingAPI(app) {
  // Displays all tables
  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

  // Displays a single table, or returns false
  app.get("/api/tables/:table", function(req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < tables.length; i++) {
      if (chosen === tables[i].routeName) {
        return res.json(tables[i]);
      }
    }

    return res.json(false);
  });

  // Create New Characters - takes in JSON input
  app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter

    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);

    tables.push(newTable);

    res.json(newTable);
  });
}

module.exports = routingAPI;
