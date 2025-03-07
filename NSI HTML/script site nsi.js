// En inspectant l'élément des pages, il a été constaté que le script plantait h24. D'après un post stackoverflow, la ligne ci-dessous permet de charger le html avant le script.
document.addEventListener("DOMContentLoaded", function() {

    // répertoire qui associe des sujets d'article (id) à des pages html
    let repertoire = { 
        "maouno": "site nsi maouno.html", 
        "sante": "site nsi sante.html",
        "mbappe": "site nsi mbappe.html",
        "trump": "site nsi trump.html"
    };

    // Pour rediriger vers la page démandée, sert au code ci-dessous
    function rediriger(article) {
        window.location.href = repertoire[article];
    }

    // Pour chaque "carte d'actualité", redirige vers la page html associée
    document.querySelectorAll(".CarteInfo").forEach(function(article) {
        article.addEventListener("click", function() {
            let nomArticle = article.id;
            if (repertoire[nomArticle]) {
                rediriger(nomArticle);
            }
        });
    });


    // Pour faire en sorte que le bouton "Retourner à la page précédente" fonctionne (en soit, ne sert à rien)
    document.querySelectorAll(".retour").forEach(function(element) {
        element.addEventListener("click", function() {
            history.back();
        });
    });

    // fin des fonctions ne semblant pas marcher

    // ici, sert à la page bonus.html. Pour des volontés de cacher la surprise, les variables et des id ont volontairement des noms non-sérieux.
    document.getElementById("boutonSurprise").addEventListener("click", function() {
        let emballageSurprise = document.getElementById("emballageSurprise");
        let chuut = document.getElementById("chuut");
        emballageSurprise.style.display = "block";
        chuut.play();
        setTimeout(function() {
            window.alert("haha 😝 Je suis quelqu'un de vilain dis donc !");
        }, 3000);
    });
});
