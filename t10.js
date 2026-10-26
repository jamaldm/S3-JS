
let panier = [15, 42, 5, 89, 12, 50, 8];

let somme = 0;
let compteur = 0;
let montantCher = 0;

/*
La variable somme doit être déclarée à l'extérieur de la boucle
for pour conserver la somme accumulée à chaque itération.
*/

for (let i = 0; i < panier.length; i++) {
    somme = somme + panier[i];

    if (panier[i] >= 20) {
        compteur = compteur + 1;
        montantCher = montantCher + panier[i];
    }
}

console.log("Total du panier :", somme);
console.log("Nombre d'articles chers :", compteur);
console.log("Montant des articles chers :", montantCher);
