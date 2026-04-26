function changeTheme() {
    // On cible toute la balise <body> de notre page
    let body = document.body;
    
    // On vérifie la couleur de fond actuelle
    if (body.style.backgroundColor === "black") {
        // Si elle est noire, on vide les styles pour revenir à l'aspect initial (blanc/texte noir)
        body.style.backgroundColor = "";
        body.style.color = "";
    } else {
        // Sinon, on applique le mode sombre : fond noir et texte blanc
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
}