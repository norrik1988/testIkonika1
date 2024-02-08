"use strict";
//promise
function esempioPromise() {
    // Creazione di una nuova Promise
    const miaPromise = new Promise((resolve, reject) => {
        // Simula un'operazione asincrona (ad esempio, una chiamata API o un timeout)
        setTimeout(() => {
            const operazioneCompletataConSuccesso = true;
            if (operazioneCompletataConSuccesso) {
                // Se l'operazione ha successo, chiamiamo resolve con il risultato desiderato
                resolve("Successo! Dati ricevuti correttamente.");
            }
            else {
                // Se si verifica un errore, chiamiamo reject con un oggetto errore
                reject(new Error("Qualcosa è andato storto durante l'operazione."));
            }
        }, 500); // Simuliamo un ritardo di 1 secondo
    });
    // Restituiamo la Promise
    return miaPromise;
}
// Utilizziamo la Promise appena creata
esempioPromise()
    .then((risultato) => {
    // La Promise è stata risolta con successo
    console.log("Risultato:", risultato);
})
    .catch((errore) => {
    // La Promise è stata rigettata (si è verificato un errore)
    console.error("Errore:", errore.message);
});
