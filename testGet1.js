"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Configura la connessione al database
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pokemon',
    password: 'ikonika',
    port: 5432, // Porta di default di PostgreSQL
});
function getAllenatori() {
    return new Promise((resolve, reject) => {
        pool.connect((err, pg, release) => {
            if (err) {
                release();
                return reject(err);
            }
            if (!pg) {
                release();
                return reject(new Error('Client non definito'));
            }
            if (pg) {
                pg.query(`SELECT * FROM allenatori`, (err, pokemon) => {
                    release();
                    if (err) {
                        return reject(err);
                    }
                    resolve(pokemon.rows);
                });
            }
        });
    });
}
function getAllenatoreById(id_allenatore) {
    return new Promise((resolve, reject) => {
        pool.connect((err, pg, release) => {
            if (err) {
                release();
                return reject(err);
            }
            if (!pg) {
                release();
                return reject(new Error('Client non definito'));
            }
            if (pg) {
                pg.query(`SELECT * FROM allenatori where id = ${id_allenatore}`, (err, allenatore) => {
                    release();
                    if (err) {
                        return reject(err);
                    }
                    resolve(allenatore.rows);
                });
            }
        });
    });
}
function getPokemonForEachTrainer() {
    return new Promise((resolve, reject) => {
        pool.connect((err, pg, release) => {
            if (err) {
                release();
                return reject(err);
            }
            if (!pg) {
                release();
                return reject(new Error('Client non definito'));
            }
            if (pg) {
                pg.query(`select 
                    p.nome_pokemon, a.nome_allenatore 
                    from pokemon p 
                    join allenatori a
                    on p.id_allenatore = a.id`, (err, allenatore) => {
                    release();
                    if (err) {
                        return reject(err);
                    }
                    resolve(allenatore.rows);
                });
            }
        });
    });
}
function getPokeshopAll() {
    return new Promise((resolve, reject) => {
        pool.connect((err, pg, release) => {
            if (err) {
                release();
                return reject(err);
            }
            if (!pg) {
                release();
                return reject(new Error('Client non definito'));
            }
            if (pg) {
                pg.query(`select 
                        * from pokeshop`, (err, pokeshop) => {
                    release();
                    if (err) {
                        return reject(err);
                    }
                    resolve(pokeshop.rows);
                });
            }
        });
    });
}
// // provaPromise()
// // .then(res => console.log(res))
// // .catch(err => console.log(err))
// function prova2 () {
//     const verifica = false
//     const promise = new Promise ((resolve, reject) => {
//         if(verifica){
//             let x = 1
//             let y = 22
//             let somma = setTimeout( ()=> {
//                 resolve(x+y)
//             }, 2000) 
//         } else {
//             reject(new Error('verifica 2 è false'))
//         }
//     })
//     return promise
// }
// function prova3 () {
//     const verifica = false
//     const promise = new Promise ((resolve, reject) => {
//         if(verifica){
//             let x = 1
//             let y = 22
//             let somma = setTimeout( ()=> {
//                 resolve(x+y)
//             }, 2000) 
//         } else {
//             reject(new Error('verifica 3 è false'))
//         }
//     })
//     return promise
// }
// function prova4 () {
//     const verifica = false
//     const promise = new Promise ((resolve, reject) => {
//         if(verifica){
//             let x = 1 
//             let y = 22
//             let somma = setTimeout( ()=> {
//                 resolve(x+y)
//             }, 2000) 
//         } else {
//             reject(new Error('verifica 4 è false'))
//         }
//     })
//     return promise
// }
// console.log('ingresso')
// prova2()
// .then(res2 => {
//     console.log(res2)
//     prova3().then(res3 => {
//         console.log(res3)
//         prova4().then(res4 => {
//             console.log(res4)
//         })
//     })
// }).catch(err => console.log (err))
// .finally(()=> {console.log('uscita')})
// async function main() {
//     console.log('ingresso')
//     try {
//         const res2 = await prova2()
//         const res3 = await prova3()
//         const res4 = await prova4()
//         console.log(res2, res3, res4)
//     } catch (error) {
//         console.log(error)
//     }
//     console.log('uscita')
// } 
main();
async function main() {
    try {
        const allenatori = await getAllenatori();
        // diversi tipi di cicli
        // for(let i =0; i< allenatori.length; i++) {
        //     console.log("ID:" + allenatori[i].id, "nome:" + allenatori[i].nome, "cognome:" + allenatori[i].cognome )
        // }
        //  allenatori.forEach( (allenatore,key) => {
        //     console.log(key)
        //     console.log("ID:" + allenatore.id, "nome:" + allenatore.nome, "cognome:" + allenatore.cognome )
        //  })
        for (let allenatore of allenatori) {
            console.log("ID:" + allenatore.id, "nome:" + allenatore.nome_allenatore, "città:" + allenatore.città);
        }
        const allenatore_id = 1;
        const allenatore = await getAllenatoreById(allenatore_id);
        console.log(allenatore.length ? allenatore[0] : 'Nessun allenatore trovato');
        const pokemonForEachTrainer = await getPokemonForEachTrainer();
        console.log(pokemonForEachTrainer);
        const stringa1 = 'Aversa';
        const pokeshopGroup = await getPokeshopAll();
        for (let pokeshop of pokeshopGroup) {
            stringa1 === pokeshop.nome_shop ? console.log(pokeshop.id, pokeshop.nome_shop) : 'pokeshop non trovato';
        }
    }
    catch (error) {
        console.log("L'errore è:", error);
    }
}
