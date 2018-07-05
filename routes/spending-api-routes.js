var db = require("../models");

module.exports = function (app) {


    //GET route to pull all of the budgets on file
    app.get("/budgets", function (req, res) {

        db.Spending.findAll({
            include: [db.User]
        }).then(function (dbSpending) {
            //console.log("These are all the budgets on file:" + JSON.stringify(dbSpending));
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
        var {
            monthlyIncome = 0,
            housing = 0,
            utilities = 0,
            phone = 0,
            cable_internet = 0,
            food = 0,
            clothing = 0,
            beauty = 0,
            entertainment = 0,
            UserId = 1
        } = req.body; //object destructuring

        db.Spending.create({
            monthlyIncome,
            housing,
            utilities,
            phone,
            cable_internet,
            food,
            clothing,
            beauty,
            entertainment,
            //we can't keep this userID field in the request.  
            //or we have to send it with the budget info.
            UserId
        }).then(function (dbSpending) {
            res.json(dbSpending);


            var housingPercentage = (dbSpending.housing / dbSpending.monthlyIncome);
            var utilitiesPercentage = (dbSpending.utilities / dbSpending.monthlyIncome);
            var phonePercentage = (dbSpending.phone / dbSpending.monthlyIncome);
            var cableInternetPercentage = (dbSpending.cable_internet / dbSpending.monthlyIncome);
            var foodPercentage = (dbSpending.food / dbSpending.monthlyIncome);
            var clothingPercentage = (dbSpending.clothing / dbSpending.monthlyIncome);
            var beautyPercentage = (dbSpending.beauty / dbSpending.monthlyIncome);
            var entertainmentPercentage = (dbSpending.entertainment / dbSpending.monthlyIncome);
            var totalExpensesPercent = (housingPercentage + utilitiesPercentage + phonePercentage + cableInternetPercentage + foodPercentage + clothingPercentage + beautyPercentage + entertainmentPercentage).toFixed(2);
            var totalExpenses = parseInt(dbSpending.housing) + parseInt(dbSpending.utilities) + parseInt(dbSpending.phone) + parseInt(dbSpending.food) + parseInt(dbSpending.clothing) + parseInt(dbSpending.beauty) + parseInt(dbSpending.entertainment);

            console.log("Housing accounts for " + housingPercentage.toFixed(2) * 100 + "% of your monthly income!");
            console.log("Utilities account for " + utilitiesPercentage.toFixed(2) * 100 + "% of your monthly income!");
            console.log("Your phone bill accounts for " + phonePercentage.toFixed(2) * 100 + "% of your monthly income!");
            console.log("Cable/Internet accounts for " + cableInternetPercentage.toFixed(2) * 100 + "% of your monthly income!");
            console.log("Food accounts for " + foodPercentage.toFixed(2) * 100 + "% of your monthly income!");
            console.log("Clothing accounts for " + clothingPercentage.toFixed(2) * 100 + "% of your monthly income!");
            console.log("Beauty supplies make up " + beautyPercentage.toFixed(2) * 100 + "% of your monthly income!");
            console.log("Entertainment spending accounts for " + entertainmentPercentage.toFixed(2) * 100 + "% of your monthly income!");
            console.log("you've spent " + (totalExpensesPercent) * 100 + "% of your monthly income.");
            console.log(parseInt(dbSpending.housing) + parseInt(dbSpending.utilities));
            console.log(totalExpenses);
            console.log("you have $" + (parseInt(dbSpending.monthlyIncome) - totalExpenses) + " remaining to spend");
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