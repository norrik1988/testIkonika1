"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//promise
const pg_1 = require("pg");
// Configura la connessione al database
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pokemon',
    password: 'ikonika',
    port: 5432, // Porta di default di PostgreSQL
});
function esempioPromise1() {
    // Creazione di una nuova Promise
    const miaPromise = new Promise((resolve, reject) => {
        // Simula un'operazione asincrona (ad esempio, una chiamata API o un timeout)
        setTimeout(() => {
            const operazioneCompletataConSuccesso = true;
            const a = 5;
            const b = 6;
            const somma = a + b;
            if (operazioneCompletataConSuccesso) {
                // Se l'operazione ha successo, chiamiamo resolve con il risultato desiderato
                resolve("Successo! Dati ricevuti correttamente.");
                console.log(somma);
            }
            else {
                // Se si verifica un errore, chiamiamo reject con un oggetto errore
                reject(new Error("Qualcosa è andato storto durante l'operazione."));
            }
        }, 1700); // Simuliamo un ritardo di 1 secondo
    });
    // Restituiamo la Promise
    return miaPromise;
}
function esempioPromise2() {
    const promiseDue = new Promise((resolve, reject) => {
        setTimeout(() => {
            const operazioneCompletataConSuccesso = true;
            const query = `select p.nome_pokemon, a.nome_allenatore, a.città, p.id_allenatore 
        from pokemon p
        join allenatori a 
        on a.id = p.id_allenatore
        where a.nome_allenatore  = 'Vincenzo' or a.nome_allenatore = 'Niki'`;
            pool.query(query, (result, error) => {
                if (operazioneCompletataConSuccesso) {
                    resolve("query eseguita con successo");
                }
                else {
                    reject(new Error("qualcosa è andato storto."));
                }
            });
        }, 4300);
    });
    return promiseDue;
}
// Utilizziamo la Promise appena creata
esempioPromise1()
    .then(() => {
    // La Promise è stata risolta con successo
})
    .catch((errore) => {
    // La Promise è stata rigettata (si è verificato un errore)
    console.error("Errore:", errore.message);
});
esempioPromise2()
    .then((result) => {
    console.log("Query eseguita con successo!");
    console.log("Risultati della query:", result);
})
    .catch((errore) => {
    console.error("Errore:", errore.message);
});
console.log("la somma è:");
setTimeout(() => {
    console.log("la query è:");
}, 3700);
