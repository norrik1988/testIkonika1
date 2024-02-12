const allenatori = [
    {
        id:0,
        ome_allenatore:"Angelica",
        città: "Albanova"
      },
      {
        id: 1,
        nome_allenatore: "Simone",
        città: "Aversa"
      },
      {
        id: 2,
        nome_allenatore: "Niki",
        città: "Caivano"
      },
      {
        id: 3,
        nome_allenatore: "Michele",
        città: "Castellamare"
      },
      {
        id: 4,
        nome_allenatore: "Max",
        città: "Melito"
      },
      {
        id: 5,
        nome_allenatore: "Vincenzo",
        città: "Napoli"
      }
];

const pokemon = [
    {
        id: 0,
        nome_pokemon: "pikachu",
        id_tipo: 5,
        livello: "15",
        id_allenatore: 5,
        prezzo_acquisto: "12",
        data_acquisto: "2023-12-31T23:00:00.000Z",
        quantità: "1",
        id_pokeshop: 1
      },
      {
        id: 1,
        nome_pokemon: "charmeleon",
        id_tipo: 2,
        livello: "18",
        id_allenatore: 7,
        prezzo_acquisto: "25",
        data_acquisto: "2023-12-31T23:00:00.000Z",
        quantità: "1",
        id_pokeshop: 2
      },
      {
        id: 2,
        nome_pokemon: "mewtwo",
        id_tipo: 7,
        livello: "45",
        id_allenatore: 1,
        prezzo_acquisto: "2000",
        data_acquisto: null,
        quantità: "1",
        id_pokeshop: 2
      },
      {
        id: 3,
        nome_pokemon: "piplup",
        id_tipo: 1,
        livello: "5",
        id_allenatore: 4,
        prezzo_acquisto: "5",
        data_acquisto: "2024-01-07T23:00:00.000Z",
        quantità: "1",
        id_pokeshop: 1
      },
      {
        id: 4,
        nome_pokemon: "torchic",
        id_tipo: 2,
        livello: "5",
        id_allenatore: 6,
        prezzo_acquisto: "5",
        data_acquisto: "2024-01-07T23:00:00.000Z",
        quantità: "1",
        id_pokeshop: 1
      },
      {
        id: 5,
        nome_pokemon: "bayleaf",
        id_tipo: 8,
        livello: "45",
        id_allenatore: 7,
        prezzo_acquisto: "250",
        data_acquisto: "2024-01-07T23:00:00.000Z",
        quantità: "1",
        id_pokeshop: 1
      },
      {
        id: 6,
        nome_pokemon: "Jigglypuff",
        id_tipo: 10,
        livello: "10",
        id_allenatore: 4,
        prezzo_acquisto: "45",
        data_acquisto: "2024-01-07T23:00:00.000Z",
        quantità: "1",
        id_pokeshop: 2
      },
      {
        id: 7,
        nome_pokemon: "Snorlax",
        id_tipo: 10,
        livello: "25",
        id_allenatore: 1,
        prezzo_acquisto: "50",
        data_acquisto: "2024-01-09T23:00:00.000Z",
        quantità: "1",
        id_pokeshop: 1
      },
      {
        id: 8,
        nome_pokemon: "Meowth",
        id_tipo: 10,
        livello: "15",
        id_allenatore: null,
        prezzo_acquisto: "25",
        data_acquisto: null,
        quantità: "1",
        id_pokeshop: 1
      },
      {
        id: 9,
        nome_pokemon: "squirtle",
        id_tipo: 1,
        livello: "8",
        id_allenatore: 2,
        prezzo_acquisto: "8",
        data_acquisto: "2023-12-31T23:00:00.000Z",
        quantità: "5",
        id_pokeshop: 1
      },
      {
        id: 10,
        nome_pokemon: "bulbasaur",
        id_tipo: 8,
        livello: "10",
        id_allenatore: 3,
        prezzo_acquisto: "8",
        data_acquisto: "2023-12-31T23:00:00.000Z",
        quantità: "2",
        id_pokeshop: 1
      },
      {
        id: 11,
        nome_pokemon: "primeape",
        id_tipo: 9,
        livello: "28",
        id_allenatore: 1,
        prezzo_acquisto: "150",
        data_acquisto: "2024-01-07T23:00:00.000Z",
        quantità: "2",
        id_pokeshop: 1
      },
      {
        id: 12,
        nome_pokemon: "Eevee",
        id_tipo: 10,
        livello: "12",
        id_allenatore: 2,
        prezzo_acquisto: "25",
        data_acquisto: "2024-01-07T23:00:00.000Z",
        quantità: "9",
        id_pokeshop: 1
      },
      {
        id: 13,
        nome_pokemon: "drowzee",
        id_tipo: 7,
        livello: "12",
        id_allenatore: 3,
        prezzo_acquisto: "20",
        data_acquisto: "2024-01-07T23:00:00.000Z",
        quantità: "1",
        id_pokeshop: 2
      }
]

const pokeshop = [
    { id: 0,
      nome_shop: "Napoli" },
    { id: 1,
      nome_shop: "Aversa" },
    { id: 2,
      nome_shop: "Cardito"},
    { id: 3,
      nome_shop: "Ponticelli"},
    { id: 4,
      nome_shop: "Barra"}

]

const array = [1, 2, 3, 4, 5];



// SPREAD //

const array2 = [... allenatori, 
    {
        id: 6,
        nome_allenatore: "Adelaide",
        città: "Procida"
      },
      {
        id: 7,
        nome_allenatore: "Davide",
        città: "Monte di Procida"
      }  ]

console.log (array2)

// con lo spread operator si aggiungono oggetti così ad un array esistente

const [first, ...rest] = allenatori

console.log(first)
console.log(rest)

// con il destructing si decostruisce l'array in parti più piccole

const angelica = allenatori.find (el => el.nome_allenatore = "Angelica")
console.log (angelica)

// col find si cerca il valore esatto

const angelicaId = allenatori.findIndex (el => el.nome_allenatore = "Angelica")
console.log (angelicaId)

// col findIndex si cerca la chiave valore dell'indice 

const newArray = allenatori.map (el => el.nome_allenatore)
console.log (newArray)

// col map si indice su quale valore bisogna mappare
// ossia ciclare come se fosse un let-for

const sum= array.reduce((acc, num) => acc + num, 0);

console.log(sum)


/// alcuni esercizi con i pokemon

// pokemon acquistati a napoli



function listaPokemonPokeshopNapoli(pokemon) {

    // console.log("ciao3")
    // console.log(pokemon1.nome_pokemon)

  const pokemonDiNapoli = pokemon.map (poke => 
  {
 
    if (poke.id_pokeshop == 1) {
                console.log(poke.nome_pokemon)
    } 
    })
        
  

}



listaPokemonPokeshopNapoli(pokemon)


//ciclo su un ciclo e poi corrispondenza value e push sul  nuovo array

function listaPokemonAllenatori(pokemon, allenatori) {
  const arrayPokemonAllenatori = [];

  for (let poke of pokemon) {
    for (let allenatore of allenatori) {
      if (poke.id_allenatore === allenatore.id) {
        arrayPokemonAllenatori.push({ pokemon: poke.nome_pokemon, allenatore: allenatore.nome_allenatore});
      }
    }
  }

  return arrayPokemonAllenatori

}


console.log (listaPokemonAllenatori(pokemon, allenatori))


