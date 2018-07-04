const CHART = document.getElementById("spendingChart");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;
var x = 5;
var spendingData = {
  label: 'Spending',
  data: [6000, x, 5514, 3933, 1326, 687, 1271, 1638, 2000]
};

var barChart = new Chart(spendingChart, {
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