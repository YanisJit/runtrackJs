// On récupère notre zone de texte
const textarea = document.getElementById("keylogger");

// On écoute chaque fois qu'une touche est enfoncée n'importe où sur la page
document.addEventListener("keydown", function(event) {
    // On vérifie si la touche appuyée est une lettre de a à z (grâce à une expression régulière)
    if (/^[a-z]$/i.test(event.key)) {
        
        // Si le curseur (focus) est déjà à l'intérieur du textarea
        if (document.activeElement === textarea) {
            // On bloque le comportement par défaut du navigateur pour tout contrôler nous-mêmes
            event.preventDefault();
            // On ajoute la lettre deux fois comme demandé
            textarea.value += event.key + event.key;
        } 
        // Si on clique ailleurs sur la page et qu'on tape au clavier
        else {
            // On ajoute la lettre une seule fois
            textarea.value += event.key;
        }
    }
});