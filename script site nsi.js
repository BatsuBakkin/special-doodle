let repertoire = { 
    "maouno": "site nsi maouno.html", 
    "sante": "site nsi sante.html",
    "mbappe": "site nsi mbappe.html",
    "trump": "site nsi trump.html"
};

function rediriger(article) {
    window.location.href = repertoire[article];
}

document.querySelectorAll(".CarteInfo").forEach(function(element) {
    element.addEventListener("click", function() {
        let nomArticle = element.id;
        if (repertoire[nomArticle]) {
            rediriger(nomArticle);
        }
    });
});

document.querySelector(".logo").addEventListener("click", function() {
    window.location.href = "index.html";


});

document.querySelector(".retour").addEventListener("click", function {
    history.back() })
