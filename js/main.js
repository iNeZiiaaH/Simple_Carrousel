// declaration variable 
var imageIndex= 1;
afficherImage(imageIndex);
// fonction pour les images
function changerImage(n) {
    afficherImage(imageIndex += n);
}
// fonction des boutons 
function boutonImage(n) {
    afficherImage(imageIndex = n);
}

// fonction pour afficher en utilisant une boucle for
function afficherImage(n) {
    // variable pour parcourir les images 
    var i;
    // variable pour récuperer les elements du HTML
    var change = document.getElementsByClassName("caroussel"); 
    var boutons = document.getElementsByClassName("bouton");
    
    if (n > change.length) {imageIndex = 1}

    if (n < 1) {imageIndex = change.length}

    for (i = 0; i < change.length; i++) {
        change[i].style.display = "none";  
    }
    
    for (i = 0; i < boutons.length; i++) {
        boutons[i].className = boutons[i].className.replace(" active", "");
    }
// gestion des boutons pour chaque diapo
change[imageIndex-1].style.display = "block";  
boutons[imageIndex-1].className += " active";
}