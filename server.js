//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Creates a server
var app = express();

//Sets a port
var PORT = process.env.PORT || 8080;

//Defines what we want BodyParser to do
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Declares route files - Provides a path for our server to follow when requests are received.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//App listening function
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});



