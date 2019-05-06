// Question 1 : Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
var count_p = document.body.querySelectorAll('p').length;
console.log(`le nombre d'élément <p> présents dans la page html est de : ${count_p}`);

// Question 2 : Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
var content_of_coucou = document.getElementById('coucou');
console.log(content_of_coucou);

//Question 3 : Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
var href_inside_3_a = document.getElementsByTagName("a")[2].getAttribute("href");
console.log(href_inside_3_a);



// Question 4 : Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
var compte_moi = document.getElementsByClassName("compte-moi").length;
console.log(`on a : ${compte_moi} éléments dans "compte_moi"`);

//Question 5 : Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
var compte_li_that_class_is_compte_moi = document.querySelectorAll('li.compte-moi').length;
console.log(compte_li_that_class_is_compte_moi);



// Question 6 : Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
var compte_li_ul_class_compte_me =  document.querySelectorAll('p.compte-moi').length;
console.log(compte_li_ul_class_compte_me);
