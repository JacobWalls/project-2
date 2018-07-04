var db = require("../models");

module.exports = function (app) {


    //GET route to pull ALL users who have signed up
    app.get("/users", function (req, res) {
        db.User.findAll({}).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    //GET ROUTE to pull a specific user according to nickname and password
    app.get("/users/:nickname/:password", function (req, res) {
        db.User.findOne({
            where: {
                nickname: req.params.nickname,
                password: req.params.password
            },
            include: [db.Spending]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    //POST route for saving a new user
    app.post("/users", function (req, res) {
        console.log(req.body);
        db.User.create({
            full_name: req.body.full_name,
            email: req.body.email,
            nickname: req.body.nickname,
            password: req.body.password
        }).then(function (err, data) {
            //telling the user that they need to create a unique user name
            if (err) throw err;
            res.json(data);
        }) //.catch function;
    });




}