var db = require("../models");

module.exports = function (app) {


     //GET route to pull all users who have submitted data
    app.get("/api/users", function (req, res) {
        db.User.findAll({}).then(function (dbUser) {
            res.json(dbUser);
        });
    });

   app.get("/api/users/:nickname/:password")
    

}