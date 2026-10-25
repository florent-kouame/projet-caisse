// Déclarer les variables nécessaires
const Budget_client = 20000;
const prix_cahier = 1500;
const Quant_cahier = 4;
const prix_stylo = 500;
const Quant_stylo = 3;
const Mont_cahier = prix_cahier * Quant_cahier;
const Mont_stylo = prix_stylo * Quant_stylo;
const Mont_total_achat = Mont_cahier + Mont_stylo;

console.log("===== CAISSE =====");

//Calculer le montant des cahiers et des stylos
console.log("cahier : ", Mont_cahier, " FCFA");
console.log("stylos : ", Mont_stylo, " FCFA");

//Calculer le montant total des achats
console.log("Total :", Mont_total_achat, " FCFA");

//Afficher le montant total et le résultat de la vérification du budget
console.log("Budget :", Budget_client, " FCFA")

//Utiliser une condition pour afficher: Budget suffisant si le total est inférieur ou égal au budget, sinon budjet insuffisant
if (Mont_total_achat <= Budget_client) {
    console.log("Budget suffisant");
} else {
    console.log("Budget insuffisant");
}

console.log("")

//Afficher les achats de 1 à 5
for (let i = 1; i <= 5; i++) {
    console.log("Achat numero ", i)
}