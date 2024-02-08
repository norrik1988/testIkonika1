"use strict";
const array1 = [
    { id: 0,
        nome: "vincenzo" },
    { id: 1,
        nome: "Gianmarco" },
    { id: 2,
        nome: "Alessia" },
    { id: 3,
        nome: "Vincenzo_Salzano" },
    { id: 4,
        nome: "Walter" },
    { id: 5,
        nome: "Peppe" },
];
const array2 = [
    3, 4
];
// function includes , il return deve stare fuori il ciclo ma dentro la function ovviamente
function corrispondenze(array1, array2) {
    const newArray = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i].id)) {
            newArray.push(array1[i]);
        }
    }
    return newArray;
}
// se il return sta nel for l'array non si riempie mai
function corrispondenze2(array1, array2) {
    console.log("ok1");
    let newArray2 = [1];
    for (let i = 0; i < array1.length; i++) {
        console.log("ok");
        if (array2.includes(array1[i].id)) {
            console.log("ok3");
            newArray2.push(array1[i]);
        }
        return newArray2;
    }
}
console.log(corrispondenze(array1, array2));
console.log(corrispondenze2(array1, array2));
