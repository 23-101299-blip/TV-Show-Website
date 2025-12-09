window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
    }, 3000);
});

function login(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "student@eui.edu.eg" && password == "123456") {
        let user = {
            name: "Student",
            email: email
        };

        localStorage.setItem("user", JSON.stringify(user));
        window.location = "profile.html";
    } else {
        document.getElementById("error-message").innerHTML = "Invalid email or password!";
    }
}

document.getElementById("login-form").addEventListener("submit", login);
