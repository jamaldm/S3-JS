
let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

let somme = 0;
let max = ventes[0];
let min = ventes[0];
let compteurExceptionnelles = 0;
let sommeExceptionnelles = 0;

for (let i = 0; i < ventes.length; i++) {
    let vente = ventes[i];

    somme = somme + vente;

    if (vente > max) {
        max = vente;
    }

    if (vente < min) {
        min = vente;
    }

    if (vente >= 130) {
        compteurExceptionnelles = compteurExceptionnelles + 1;
        sommeExceptionnelles = sommeExceptionnelles + vente;
    }
}

console.log("Nombre total de ventes :", ventes.length);
console.log("CA Total :", somme);
console.log("Vente maximale :", max);
console.log("Vente minimale :", min);
console.log("Nombre de ventes exceptionnelles :", compteurExceptionnelles);
console.log("CA des ventes exceptionnelles :", sommeExceptionnelles); 

