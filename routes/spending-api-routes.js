var db = require("../models");

module.exports = function (app) {


    //GET route to pull all of the budgets on file
    app.get("/budgets", function (req, res) {

        db.Spending.findAll({
            include: [db.User]
        }).then(function (dbSpending) {
            console.log("These are all the budgets on file:" + JSON.stringify(dbSpending));
            res.json(dbSpending);
        });
    });


    //GET route to pull a single budget by a particular nickname and password 
    app.get("/budgets/:nickname/:password", function (req, res) {
        db.User.findOne({
            where: {
                nickname: req.params.nickname,
                password: req.params.password
            },
            include: [db.Spending]
        }).then(function (dbSpending) {
            res.json(dbSpending);
        })
    });


    //POST route for spending information input by the user
    app.post("/newbudget", function (req, res) {
        console.log(req.body);
        db.Spending.create({
            monthlyIncome: req.body.monthlyIncome,
            housing: req.body.housing,
            utilities: req.body.utilities,
            phone: req.body.phone,
            cable_internet: req.body.cable_internet,
            food: req.body.food,
            clothing: req.body.clothing,
            beauty: req.body.beauty,
            entertainment: req.body.entertainment
        }).then(function (dbSpending) {
            res.json(dbSpending);
            console.log("contact");
        });
    });

    //PUT route used to update the budget for users as well
    app.put("/budgets/:nickname/:password", function (req, res) {

        db.Spending.update({
            // monthlyIncome: req.body.monthlyIncome,
            // housing: req.body.housing,
            // utilities: req.body.utilities,
            // phone: req.body.phone,
            // cable_internet: req.body.cable_internet,
            // food: req.body.food,
            // clothing: req.body.clothing,
            // beauty: req.body.beauty,
            // entertainment: req.body.entertainment
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbSpending) {
            res.json(dbSpending);
        });
    });

}