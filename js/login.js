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
            name: "Ali Gameel",
            email: "Netflixer"
        };

        localStorage.setItem("user", JSON.stringify(user));
        window.location = "personal-profile.html";
    } else {
        document.getElementById("error-message").innerHTML = "Invalid email or password!";
    }
}

document.getElementById("login-form").addEventListener("submit", login);

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
