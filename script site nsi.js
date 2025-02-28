let repertoire = { 
    "maouno": "site nsi maouno.html", 
    "sante": "site nsi sante.html",
    "mbappe": "site nsi mbappe.html",
    "trump": "site nsi trump.html"
};

function rediriger(article) {
    window.location.href = repertoire[article];
}

// Sélectionne toutes les divs avec la classe "CarteInfo" et leur assigne un événement "click"
document.querySelectorAll(".CarteInfo").forEach(function(element) {
    element.addEventListener("click", function() {
        let nomArticle = element.id;  // Récupère l'id de la div cliquée
        if (repertoire[nomArticle]) {
            rediriger(nomArticle);
        }
    });
});

// Sélectionne la première div avec la classe "logo" et lui assigne un événement "click"
document.querySelector(".logo").addEventListener("click", function() {
    window.location.href = "index.html";
});