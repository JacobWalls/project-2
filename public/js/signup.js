var newUser;

$('#submit-signUp').on("click", function () {
  event.preventDefault();

  var full_name = $('#fullname').val().trim();
  var email = $('#email').val().trim();
  var nickname = $('#nickname').val().trim();
  var password = $('#password').val().trim();

  newUser = {
    full_name,
    email,
    nickname,
    password
  }
console.log(newUser);

  $.post("/users", newUser)

    .then(function (data) {
      console.log(data);
    })
});