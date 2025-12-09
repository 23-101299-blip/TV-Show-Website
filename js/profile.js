window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
    }, 3000);
});

function loadUserProfile() {
    let userData = localStorage.getItem("user");

    if (!userData) {
        window.location = "login.html";
        return;
    }

    let user = JSON.parse(userData);

    document.getElementById("user-name").innerHTML = user.name;
    document.getElementById("user-email").innerHTML = user.email;
}

function logout() {
    localStorage.removeItem("user");
    window.location = "login.html";
}

loadUserProfile();
