function ajouter(event){

event.preventDefault();

//initialisation des variables
let nom = document.getElementById("nom");
let prénom = document.getElementById("prénom");
let email = document.getElementById("email");
let age = document.getElementById("age");
let genre = document.getElementById("genre");
let armes = document.getElementById("armes");
let commentaire1 = document.getElementById("commentaire1");

//on récupère les valeurs dans la console
console.log(nom.value);
console.log(prénom.value);
console.log(email.value);
console.log(age.value);
console.log(genre.value);
console.log(armes.value);
console.log(commentaire1.value);

//on crée la ligne et les colonnes
let ligne = document.createElement("tr");
let cellule1 = document.createElement("td");
let cellule2 = document.createElement("td");
let cellule3 = document.createElement("td");
let cellule4 = document.createElement("td");
let cellule5 = document.createElement("td");
let cellule6 = document.createElement("td");
let cellule7 = document.createElement("td");

//on remplit les colonnes de la ligne, donc les cellules
cellule1.innerHTML = nom.value;
cellule2.innerHTML = prénom.value;
cellule3.innerHTML = email.value;
cellule4.innerHTML = age.value;
cellule5.innerHTML = genre.value;
cellule6.innerHTML = armes.value;
cellule7.innerHTML = commentaire1.value;

//la cellule va dans la ligne
ligne.appendChild(cellule1);
ligne.appendChild(cellule2);
ligne.appendChild(cellule3);
ligne.appendChild(cellule4);
ligne.appendChild(cellule5);
ligne.appendChild(cellule6);
ligne.appendChild(cellule7);

//on récupère id du tableau
let tableau = document.getElementById("tableau");

//la ligne va dans le tableau
tableau.appendChild(ligne);
}