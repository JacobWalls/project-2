var db = require("../models");

module.exports = function (app) {


    //GET route to pull all users who have submitted data
    app.get("/api/users", function (req, res) {
        db.User.findAll({}).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    //GET ROUTE to pull a specific user 
    app.get("/api/user", function (req, res) {
        db.User.findOne({
            where: {
                nickname: req.body.nickname,
                password: req.body.password
            },
            include: [db.Spending]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    //




}