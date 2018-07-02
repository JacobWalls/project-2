// var spendingChart = document.getElementById("spendingChart");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;

// var spendingData = {
//   label: 'Spending',
//   data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638]
// };

// var barChart = new Chart(spendingChart, {
//   type: 'bar',
//   data: {
//     labels: ["Monthly Income", "Housing", "Utilities", "Phone", "Cable/Internet", "Food", "Clothing", "Beauty", "Entertainment"],
//     datasets: [spendingData]
//   }
// });

// adding button functionality to our budget page

$("#pushButton").on("click", function (event) {
  event.preventDefault();

  var userData = {

    monthlyIncome: $("#monthlyIncome").val().trim(),
    housing: $("#housing").val().trim(),
    utilities: $("#utilities").val().trim(),
    phone: $("#phone").val().trim(),
    cableInternet: $("#cableInternet").val().trim(),
    food: $("#food").val().trim(),
    clothing: $("#clothing").val().trim(),
    beauty: $("#beauty").val().trim(),
    entertainment: $("#entertainment").val().trim(),
  };

  $.post("/newbudget", userData)

    .then(function (data) {
      console.log("this came back" + data);
    })

  $("#monthlyIncome").val("");
  $("#housing").val("");
  $("#utilities").val("");
  $("#phone").val("");
  $("#cableInternet").val("");
  $("#food").val("");
  $("#clothing").val("");
  $("#beauty").val("");
  $("#entertainment").val("");
})