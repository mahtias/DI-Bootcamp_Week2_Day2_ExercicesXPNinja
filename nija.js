// Exercice 1 : Différence D'âge
// Instruction
// Étant donné les années de naissance de deux personnes, trouvez la date à laquelle la plus jeune a exactement la moitié de l'âge de la plus âgée.
// Notes : Les dates sont données au format AAAA



//console.log(new Date().getFullYear());
let youngerYear = prompt("Entrer l'année de naissance du cadet");
let yearEldest = prompt("Entrer l'année de naissance de l'ainée");
if (yearEldest > youngerYear) {
    alert("L'année de naissance de l'ainée doit être inferieure à celle du cadet");
} else {
    let currentYear = new Date().getFullYear();
    let researchYear = (currentYear - yearEldest) - (2 * (currentYear - anneeCadet)) //Formule: z=y-2x avec y=age ainé, x=age cadet
    console.log(researchYear);
    alert("L'année à laquelle l'ainé a eu/aura le double de l'age du cadet est " + (currentYear + anneeRech));
}




// Exercice 2 : Codes Postaux
// Instruction
// Exercice plus
// difficile Astuce : Cet exercice comporte 2 parties. Tout d'abord, faites cet exercice
// sans expressions régulières, puis faites-le en utilisant des expressions régulières

// Lorsque vous travaillez dans un bureau de poste, vous devez connaître le code postal des clients afin de leur envoyer leurs lettres.
// Demandez au client son code postal et console.log "succès" ou "erreur" en fonction des règles suivantes.
// Les codes postaux se composent de 5 chiffres
// Ne doit contenir que des chiffres
// Ne doit contenir aucun espace blanc (espaces)
// Ne doit pas comporter plus de 5 chiffres

let zipCode = prompt("Entrer le code zip svp (5 caractères)!");
if (zipCode.length == 5 && !isNaN(zipCode) && zipCode.trim().search(" ") == -1) {
    console.log("Success");
} else {
    console.log("Error");
}






/*
Exercice 3 : Mot Secret
Instruction
Exercice plus
difficile Astuce : Utilisez des expressions régulières

Invitez l'utilisateur à saisir un mot et enregistrez-le dans une variable.
Supprimez toutes les voyelles du mot et console.logez le résultat.
Bonus : Remplacez les voyelles par un autre caractère et console.logez le résultat
a = 1
e = 2
i = 3
o = 4
u = 5
*/

