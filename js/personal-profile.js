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

    // Auto-update legacy data if found
    if (user.name === "Student") {
        user.name = "Ali Gameel";
        user.email = "Netflixer";
        localStorage.setItem("user", JSON.stringify(user));
    }

    document.getElementById("profile-name").innerHTML = user.name;
    document.getElementById("profile-email").innerHTML = user.email;

    let initials = user.name.charAt(0);
    let initialsEl = document.getElementById("user-initials");
    if (initialsEl) {
        initialsEl.innerHTML = initials;
    }
}

function logout() {
    localStorage.removeItem("user");
    window.location = "login.html";
}

loadPersonalProfile();

function handleNavbarScroll() {
    let navbar = document.getElementById("navbar");
    if (!navbar) return;
    if (window.scrollY > 100) {
        navbar.className = "navbar scrolled";
    } else {
        navbar.className = "navbar";
    }
}
window.addEventListener("scroll", handleNavbarScroll);
