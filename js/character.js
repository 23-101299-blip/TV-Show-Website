window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
    }, 3000);
});

function loadCharacter() {
    let selectedId = localStorage.getItem("selectedCharacter");
    let charactersData = JSON.parse(localStorage.getItem("charactersData"));

    if (!selectedId || !charactersData) {
        showError();
        return;
    }

    let currentCharacter = null;
    for (let i = 0; i < charactersData.length; i++) {
        if (charactersData[i].id == selectedId) {
            currentCharacter = charactersData[i];
        }
    }

    if (currentCharacter == null) {
        showError();
        return;
    }

    displayCharacter(currentCharacter);
}

function displayCharacter(character) {
    let container = document.getElementById("profile-content");

    container.innerHTML = `
        <div class="profile-card">
            <div class="profile-header">
                <div class="profile-image-container">
                    <img src="${character.image}" alt="${character.name}">
                </div>
                <div class="profile-info">
                    <h1 class="profile-name">${character.name}</h1>
                    <p class="profile-role">${character.role}</p>
                    
                    <div class="profile-detail">
                        <span class="detail-label">Portrayed By</span>
                        <span class="detail-value">${character.actor}</span>
                    </div>
                    
                    <div class="profile-detail">
                        <span class="detail-label">Special Abilities</span>
                        <span class="detail-value">${character.powers}</span>
                    </div>
                </div>
            </div>
            
            <div class="profile-bio">
                <h2 class="bio-title">Biography</h2>
                <p class="bio-text">${character.bio}</p>
            </div>
        </div>
    `;

    document.title = character.name + " - Stranger Things";
}

function showError() {
    let container = document.getElementById("profile-content");

    container.innerHTML = `
        <div class="error-message">
            <h2>Character Not Found</h2>
            <p>Sorry, we couldn't find the character you're looking for.</p>
            <p>Please go back to the home page and select a character.</p>
        </div>
    `;
}

function goBack() {
    window.location = "index.html";
}

loadCharacter();
