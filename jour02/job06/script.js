// La séquence exacte du Konami Code
const konamiCode = [
    "ArrowUp", "ArrowUp", 
    "ArrowDown", "ArrowDown", 
    "ArrowLeft", "ArrowRight", 
    "ArrowLeft", "ArrowRight", 
    "b", "a"
];

// Variable pour savoir à quelle étape du code on en est
let indexSaisie = 0;

// On écoute tout ce qui est tapé au clavier
document.addEventListener("keydown", function(event) {
    // Si la touche pressée correspond à la prochaine touche attendue dans notre liste
    if (event.key === konamiCode[indexSaisie]) {
        // On avance d'un cran dans la séquence
        indexSaisie++;
        
        // Si on a atteint la fin de la liste (le code est tapé en entier correctement)
        if (indexSaisie === konamiCode.length) {
            activerStylePlateforme();
            // On remet le compteur à zéro au cas où on voudrait le refaire
            indexSaisie = 0; 
        }
    } else {
        // Si l'utilisateur se trompe de touche, on recommence la séquence à zéro
        indexSaisie = 0;
    }
});

// Fonction qui transforme la page
function activerStylePlateforme() {
    // On ajoute la classe CSS qui change les couleurs du fond
    document.body.classList.add("plateforme-style");
    
    // On injecte du contenu HTML dans la page qui était vide
    document.body.innerHTML = `
        <h1 class="titre">La Plateforme_</h1>
        <p>🎉 Konami Code activé avec succès ! 🎉</p>
    `;
}