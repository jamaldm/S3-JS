let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

//Le nombre total de ventes réalisées.
console.log("Le nombre total de ventes réalisées ", ventes.length);

//Le chiffre d’affaires total (la somme).
let somme = 0;
for (let i = 0; i < ventes.length; i++) {
    somme += ventes[i];
}
console.log("Le chiffre d’affaires total :", somme);

//Le montant de la vente la plus élevée (Maximum) et la plus faible (Minimum).
let position_max = -1;
let maximum = ventes[0];
for (let i = 1; i < ventes.length; i++) {
    if (ventes[i] > maximum) {
        maximum = ventes[i];
    }
}
console.log("Le montant de la vente la plus élevée ", maximum);

let position_min = -1;
let minimum = ventes[0];
for (let j = 1; j < ventes.length; j++) {
    if (ventes[j] < minimum) {
        minimum = ventes[j];
    }
}
console.log("Le montant de la vente la plus faible ", minimum);

//Le nombre de ventes “Exceptionnelles”.
let Exceptionnelles = 0;
for (let i = 1; i < ventes.length; i++) {
    if (ventes[i] >= 130) {
        Exceptionnelles++
    }
}
console.log("Le nombre de ventes “Exceptionnelles”. ", Exceptionnelles);

//Le chiffre d’affaires généré uniquement par ces ventes exceptionnelles.
let somme_Exceptionnelles = 0;
for (let i = 0; i < ventes.length; i++) {
    if (ventes[i] >= 130) {
        somme_Exceptionnelles += ventes[i];

    }
}
console.log("Le chiffre d’affaires généré uniquement par ces ventes exceptionnelles :", somme_Exceptionnelles);