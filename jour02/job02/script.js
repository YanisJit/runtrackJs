function showhide() {
    // On cherche si un élément avec l'id "monArticle" existe déjà
    let article = document.getElementById("monArticle");

    if (article !== null) {
        // S'il existe (la fonction a trouvé quelque chose), on le supprime de la page
        article.remove();
    } else {
        // S'il n'existe pas (null), on crée la balise <article>
        let nouvelArticle = document.createElement("article");
        
        // On lui donne un ID pour pouvoir le retrouver la prochaine fois
        nouvelArticle.id = "monArticle";
        
        // On lui ajoute le texte demandé
        nouvelArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        
        // On l'ajoute visiblement à l'intérieur de notre page (dans la balise body)
        document.body.appendChild(nouvelArticle);
    }
}