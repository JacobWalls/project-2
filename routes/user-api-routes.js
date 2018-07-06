var db = require("../models");

module.exports = function (app) {


    //GET route to pull ALL users who have signed up
    app.get("/users", function (req, res) {
        db.User.findAll({}).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    //GET ROUTE to pull a specific user according to nickname and password
    app.get("/returningUser", function (req, res) {
        db.User.findOne({
            where: {
                nickname: req.query.nickname,
                password: req.query.password
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
            res.json(data);

        }) //.catch function;
    });


    //GET ROUTE to pull a specific budget according to nickname and password
    app.get("/budgets/:userId", function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.userId

            },
            include: [db.Spending]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

}