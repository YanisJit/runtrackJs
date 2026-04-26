const footer = document.getElementById("footer");

// On écoute l'événement "scroll" sur la fenêtre
window.addEventListener("scroll", function() {
    // On calcule la hauteur totale qu'on peut scroller
    let hauteurTotale = document.body.scrollHeight - window.innerHeight;
    
    // On récupère notre position actuelle de scroll
    let positionScroll = window.scrollY;
    
    // On calcule le pourcentage (de 0 à 100)
    let pourcentage = (positionScroll / hauteurTotale) * 100;
    
    // On modifie la couleur de fond du footer en fonction du pourcentage
    // On utilise hsl() où la teinte passe de 0 (rouge) à 120 (vert)
    let teinte = pourcentage * 1.2; 
    footer.style.backgroundColor = `hsl(${teinte}, 100%, 50%)`;
});