const CHART = document.getElementById("spendingChart");
const CHART2 = document.getElementById("spendingChart2");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;
var x = 5;
var spendingData = {
  label: 'Spending',
  data: [6000, x, 5514, 3933, 1326, 687, 1271, 1638, 2000]
};

var barChart = new Chart(spendingChart2, {
  type: 'bar',
  data: {
    labels: ["Monthly Income", "Housing", "Utilities", "Phone", "Cable/Internet", "Food", "Clothing", "Beauty", "Entertainment"],
    datasets: [spendingData]
  }
});



// adding button functionality to our budget page

$("#pushButton").on("click", function (event) {

  event.preventDefault();


  var userData = {
    userId: localStorage.getItem('userId'),
    monthlyIncome: $("#monthlyIncome").val().trim(),
    housing: $("#housing").val().trim(),
    utilities: $("#utilities").val().trim(),
    phone: $("#phone").val().trim(),
    cable_internet: $("#cableInternet").val().trim(),
    food: $("#food").val().trim(),
    clothing: $("#clothing").val().trim(),
    beauty: $("#beauty").val().trim(),
    entertainment: $("#entertainment").val().trim(),
  };
  console.log(userData);

  $.post("/newbudget", userData)

    .then(function (data) {

      console.log(data);
      localStorage.setItem("userId", data.id);

      spendingData = {
        label: 'Spending',
        data: [data.monthlyIncome,
          data.housing,
          data.utilities,
          data.phone,
          data.cable_internet,
          data.food,
          data.clothing,
          data.beauty,
          data.entertainment

        ],
        backgroundColor: [
          "lightgray",
          "rgb(223, 195, 41)",
          "skyblue",
          "salmon",
          "rgb(230, 54, 230)",
          "lime",
          "rgba(172, 28, 59, 0.664)",
          "rgb(240, 195, 195)",
          "rgb(28, 161, 161)",
        ]
      };


      newbarChart = new Chart(spendingChart2, {
        type: 'bar',
        data: {
          labels: ["Monthly Income", "Housing", "Utilities", "Phone", "Cable/Internet", "Food", "Clothing", "Beauty", "Entertainment"],
          datasets: [spendingData]
        }
      });
      console.log(spendingData);
    })

  // $("#monthlyIncome").val(data.monthlyIncome);
  // $("#housing").val("");
  // $("#utilities").val("");
  // $("#phone").val("");
  // $("#cableInternet").val("");
  // $("#food").val("");
  // $("#clothing").val("");
  // $("#beauty").val("");
  // $("#entertainment").val("");
})

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
}

function updateBudget(userData) {
  $.ajax({
    method: "PUT",
    url: "/api/users",
    data: userData
  }).then(function (data){
    console.log(data);
  })
};