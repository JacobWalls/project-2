var newUser;

$('#submit-signUp').on("click", function() {
  event.preventDefault();

var fullname = $('#fullname').val().trim();
var email = $('#email').val().trim();
var nickname = $('#userid').val().trim();
var password = $('#password').val().trim();

  newUser = {
    fullname,
    email,
    nickname,
    password
  }

  $.post("/api/users", signUp)

        .then(function (data) {
            console.log(data);
        })
});