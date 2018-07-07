// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // budget route loads budget.html
  app.get("/newBudget", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/budget.html"));
  });

  // user route loads signup page
  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // user route loads signup page
  app.get("/returningUser", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
};