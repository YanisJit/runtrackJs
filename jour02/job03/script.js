// La fonction qui ajoute +1 au compteur
function addOne() {
    // On récupère le paragraphe qui contient le nombre
    let paragrapheCompteur = document.getElementById("compteur");
    
    // On récupère son texte actuel, on le transforme en nombre, et on ajoute 1
    let nombreActuel = parseInt(paragrapheCompteur.textContent);
    paragrapheCompteur.textContent = nombreActuel + 1;
}

// On récupère le bouton
let monBouton = document.getElementById("button");

// On lui ajoute un "écouteur" : dès qu'il entend un "click", il lance la fonction addOne
monBouton.addEventListener("click", addOne);