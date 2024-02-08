"use strict";
// sono un esercizio sugli array
// splice somma, leva e modifica un array
// slice restituisce un nuovo array tagliando da index ad index
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// At position 2, add 2 elements: 
fruits.splice(3, 0, "fragola", "pera", "mela");
// da posizione zero leva 3 elementi + aggiungi quarto
const arrivi = ["primo", "secondo", "terzo", "quinto", "sesto"];
arrivi.splice(0, 3, "quarto");
console.log(fruits);
console.log(arrivi);
const cose = ["armadio", "mobile", "lampadario"];
const coseNuove = cose.slice(1);
console.log(coseNuove);
// esempi slice
const persone = [
    { nome: "Mario", cognome: "Rossi", età: 30 },
    { nome: "Luigi", cognome: "Verdi", età: 25 },
    { nome: "Giovanni", cognome: "Bianchi", età: 35 },
    { nome: "Paola", cognome: "Neri", età: 40 },
];
// Estrae una porzione delle persone dall'indice 1 all'indice 3 (escluso)
const selezione1 = persone.slice(1, 3);
console.log(selezione1);
// Output:
// [
//   { nome: "Luigi", cognome: "Verdi", età: 25 },
//   { nome: "Giovanni", cognome: "Bianchi", età: 35 }
// ]
// Estrae una porzione delle persone dall'indice 2 fino alla fine dell'array
const selezione2 = persone.slice(2);
console.log(selezione2);
// Output:
// [
//   { nome: "Giovanni", cognome: "Bianchi", età: 35 },
//   { nome: "Paola", cognome: "Neri", età: 40 }
// ]
// Estrae una copia dell'intero array delle persone
const copia = persone.slice();
console.log(copia);
// Output:
// [
//   { nome: "Mario", cognome: "Rossi", età: 30 },
//   { nome: "Luigi", cognome: "Verdi", età: 25 },
//   { nome: "Giovanni", cognome: "Bianchi", età: 35 },
//   { nome: "Paola", cognome: "Neri", età: 40 }
// ]
