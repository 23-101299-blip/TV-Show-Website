window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
    }, 3000);
});

function loadPersonalProfile() {
    let userData = localStorage.getItem("user");

    if (!userData) {
        window.location = "login.html";
        return;
    }

    let user = JSON.parse(userData);

    document.getElementById("profile-name").innerHTML = user.name;
    document.getElementById("profile-email").innerHTML = user.email;

    let initials = user.name.charAt(0);
    document.getElementById("user-initials").innerHTML = initials;
}

function logout() {
    localStorage.removeItem("user");
    window.location = "login.html";
}

loadPersonalProfile();
