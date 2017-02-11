//Dependencies
var path = require("path");

//Routing 
module.exports = function(app) {

//HTML GET requests - Routes users to page based off URL

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

 //Default to home page if no URL found
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
