//this is the sign up button functionality.  This will be used to sign in a new user and add them to the user table.
$("#sign-button").on("click", function (event) {
    event.preventDefault();

    var signupData = {
        full_name: "me",
        email: "@gmail.com",
        nickname: 'jubei',
        password: 'nunya'
        //full_name: $("nani nani").val().trim(),
        // email: $("nani nani").val().trim(),
        // nickname: $("nani nani").val().trim(),
        // password: $("nani nani").val().trim(),
    };
    console.log(signupData);

    $.post("/users", signupData)

        .then(function (data) {
            console.log(data);
            if (data.UserId) {
                alert("User Name is taken")
            }
            localStorage.setItem('userId', data.id);
        })

    $("#full_nameid").val("");
    $("#emailId").val("");
    $("#nicknameId").val("");
    $("#passwordId").val("");

})

//this is the login button functionality.  This will be used to bring up a returning users budget and create a join.  
$("#log-button").on("click", function (event) {
    event.preventDefault();

    var userData = {
        nickname: $("nani nani").val().trim(),
        password: $("nani nani").val().trim(),
    };
    console.log(userData);

    $.post("/users", userData)

        .then(function (data) {
            localStorage.setItem('userId', data.id);
            console.log("this came back" + data);
        })

    $("#nicknameId").val("");
    $("#passwordId").val("");

});