//this is the sign up button functionality.  This will be used to sign in a new user and add them to the user table.
// $("#submit-signUp").on("click", function (event) {
//     event.preventDefault();

//     var signupData = {
//         full_name: "me",
//         email: "@gmail.com",
//         nickname: 'jubei',
//         password: 'nunya'
//         //full_name: $("nani nani").val().trim(),
//         // email: $("nani nani").val().trim(),
//         // nickname: $("nani nani").val().trim(),
//         // password: $("nani nani").val().trim(),
//     };
//     console.log(signupData);

//     $.post("/users", signupData)

//         .then(function (data) {
//             console.log(data);
//             if (data.UserId) {
//                 alert("User Name is taken")
//             }
//             localStorage.setItem('userId', data.id);
//         })

//     $("#full_nameid").val("");
//     $("#emailId").val("");
//     $("#nicknameId").val("");
//     $("#passwordId").val("");

// })

//this is the login button functionality.  This will be used to bring up a returning users budget and create a join.  
$("#returningUser").on("click", function (event) {
    event.preventDefault();

    var userData = {
        nickname: "Shaq", //$("nani nani").val().trim(),
        password: "password123", //$("nani nani").val().trim(),
    };
    console.log(userData);

    $.get("/user", userData)

        .then(function (data) {
            console.log(data);
            localStorage.setItem('userId', data.id);
            console.log(data);
            //window.location.assign("/returningUser")
        })

    $("#nicknameId").val("");
    $("#passwordId").val("");

});

/*The user will login and give a user name and password
We'll take the user name (nickname) and password and search for them in the database
Once we find them in the database we'll send back the id attacched to that row
this is will be set in the local storage

Whenever a user goes anywhere else in the site we'll have their userID from local storage

after a returning user clicks "welcome back" we'll pull up the budget page and fill with their existing budget information 
and chart*/