let characters = [
    {
        id: 1,
        name: "Eleven",
        image: "images/characters/eleven.png",
        bio: "Eleven (birth name: Jane Ives) is a girl with psychokinetic and telepathic abilities who escaped from Hawkins National Laboratory. Raised by Dr. Martin Brenner, she was locked away for years and tested. She eventually escaped and became friends with Mike, Dustin, and Lucas. She has the power to move objects with her mind and can access the Upside Down.",
        actor: "Millie Bobby Brown",
        role: "The Psychic Hero",
        powers: "Telekinesis, Telepathy, Portal Creation"
    },
    {
        id: 2,
        name: "Mike Wheeler",
        image: "images/characters/mike.png",
        bio: "Mike Wheeler is the leader of the friend group and Eleven's boyfriend. He is brave, loyal, and protective of his friends. Mike was the first to befriend Eleven when she escaped from the lab. He often takes charge during their adventures and is willing to risk everything to protect those he loves.",
        actor: "Finn Wolfhard",
        role: "The Leader",
        powers: "Strategic Thinking, Leadership"
    },
    {
        id: 3,
        name: "Dustin Henderson",
        image: "images/characters/dustin.png",
        bio: "Dustin Henderson is the most lovable member of the group. He's smart, funny, and has a scientific mind. Dustin often provides comic relief but is also incredibly brave. He befriended a baby Demogorgon he named D'Artagnan (Dart) and has a long-distance girlfriend named Suzie. His scientific knowledge often helps the group solve mysteries.",
        actor: "Gaten Matarazzo",
        role: "The Scientist",
        powers: "Scientific Knowledge, Radio Communication"
    },
    {
        id: 4,
        name: "Lucas Sinclair",
        image: "images/characters/lucas.png",
        bio: "Lucas Sinclair is the skeptical and pragmatic member of the group. Initially distrustful of Eleven, he eventually becomes one of her closest friends. Lucas is dating Max Mayfield and is known for his skills with a slingshot. He's protective, brave, and always speaks his mind, even when it causes conflict within the group.",
        actor: "Caleb McLaughlin",
        role: "The Realist",
        powers: "Expert Aim, Strategic Combat"
    }
];

let quotes = [
    { text: "Friends don't lie.", character: "Eleven" },
    { text: "She's our friend and she's crazy!", character: "Dustin" },
    { text: "Mornings are for coffee and contemplation.", character: "Chief Hopper" },
    { text: "I dump your ass!", character: "Eleven" },
    { text: "I may be a pretty shitty boyfriend, but turns out I'm actually a pretty damn good babysitter.", character: "Steve" },
    { text: "If anyone asks where I am, I've left the country.", character: "Murray" },
    { text: "We never would've upset you if we knew you had superpowers.", character: "Dustin" },
    { text: "You can't spell America without Erica.", character: "Erica" },
    { text: "I'm stealthy, like a ninja.", character: "Dustin" },
    { text: "Why are you keeping this curiosity door locked?", character: "Dustin" }
];

let merch = [
    { id: 1, name: "Stranger Cap", price: 25 },
    { id: 2, name: "Demogorgon Mug", price: 15 },
    { id: 3, name: "Upside Down Poster", price: 20 },
    { id: 4, name: "Eleven Funko Pop", price: 30 }
];

let cart = [];

window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
    }, 3000);
});

function scrollToSection(sectionId) {
    let element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function goToCharacter(characterId) {
    localStorage.setItem("selectedCharacter", characterId);
    localStorage.setItem("charactersData", JSON.stringify(characters));
    window.location = "character.html";
}

function showRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    document.getElementById("random-quote").innerHTML = '"' + randomQuote.text + '"';
    document.getElementById("quote-character").innerHTML = "- " + randomQuote.character;
}

function renderCharacters() {
    let container = document.getElementById("characters-container");
    container.innerHTML = "";

    for (let i = 0; i < characters.length; i++) {
        container.innerHTML += `
            <div class="character-card" onclick="goToCharacter(${characters[i].id})">
                <img src="${characters[i].image}" alt="${characters[i].name}">
                <div class="character-info">
                    <h3 class="character-name">${characters[i].name}</h3>
                    <p class="character-actor">Played by ${characters[i].actor}</p>
                    <p class="character-preview">${characters[i].role}</p>
                </div>
            </div>
        `;
    }
}

function renderMerch() {
    let container = document.getElementById("merch-container");
    container.innerHTML = "";

    for (let i = 0; i < merch.length; i++) {
        container.innerHTML += `
            <div class="merch-card">
                <h3 class="merch-name">${merch[i].name}</h3>
                <p class="merch-price">$${merch[i].price}</p>
                <button onclick="addToCart(${merch[i].id})" class="add-btn">+</button>
            </div>
        `;
    }
}

function addToCart(productId) {
    let cartData = localStorage.getItem("cart");

    if (cartData) {
        cart = JSON.parse(cartData);
    }

    let product = null;
    for (let i = 0; i < merch.length; i++) {
        if (merch[i].id == productId) {
            product = merch[i];
        }
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function removeFromCart(productId) {
    let cartData = localStorage.getItem("cart");

    if (cartData) {
        cart = JSON.parse(cartData);
    }

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == productId) {
            cart.splice(i, 1);
            break;
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    let cartData = localStorage.getItem("cart");

    if (cartData) {
        cart = JSON.parse(cartData);
    }

    let container = document.getElementById("cart-items");
    let message = document.getElementById("cart-message");

    if (cart.length == 0) {
        container.innerHTML = "";
        message.innerHTML = "Cart is empty";
        return;
    }

    message.innerHTML = "";
    container.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        container.innerHTML += `
            <div class="cart-item">
                <span class="cart-item-name">${cart[i].name}</span>
                <span class="cart-item-price">$${cart[i].price}</span>
                <button onclick="removeFromCart(${cart[i].id})" class="remove-btn">Remove</button>
            </div>
        `;
    }
}

function handleNavbarScroll() {
    let navbar = document.getElementById("navbar");

    if (window.scrollY > 100) {
        navbar.className = "navbar scrolled";
    } else {
        navbar.className = "navbar";
    }
}

window.onscroll = function () {
    handleNavbarScroll();
};

renderCharacters();
renderMerch();
renderCart();
