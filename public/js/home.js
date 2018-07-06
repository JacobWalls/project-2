$("#modalSignup").on("click", function (event) {
    event.preventDefault();

    var signUp = {
        fullName: $("#fullName").val().trim(),
        email: $("#email").val().trim(),
        nickname: $("#nickname").val().trim(),
        password: $("#password").val().trim(),
    };

    $.post("/api/users", signUp)

        .then(function (data) {
            console.log(data);
        })

    $("#fullName").val("");
    $("#email").val("");
    $("#nickname").val("");
    $("#password").val("");
});