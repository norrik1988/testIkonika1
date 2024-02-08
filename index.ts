// async //

const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configura la connessione al database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pokemon',
    password: 'ikonika',
  port: 5432, // Porta di default di PostgreSQL
});

// async e await con una get

// il primo get visualizza il localhost quando viene aperto server locale sulla porta 3000, il secondo get va a prendere i dati -
//  '/' individua la rotta //
app.get('/', async ( req: any, res: any) => {
  const html = `
    <button id="fetchDataButton">Visualizza database pokemon</button>
    <div id="jsonDataContainer"></div>
    <script>
      document.getElementById('fetchDataButton').addEventListener('click', async () => {
        try {
          const response = await fetch('/data');
          const jsonData = await response.json();
          document.getElementById('jsonDataContainer').innerHTML = 
            '<h1>pokemon:</h1>' + 
            '<pre>' + JSON.stringify(jsonData.pokemon, null, 2) + '</pre>' + 
            '<h1>allenatori:</h1>' + 
            '<pre>' + JSON.stringify(jsonData.allenatori, null, 2) + '</pre>' + 
            '<h1>Incassi del negozio di Napoli:</h1>' + 
            '<pre>' + JSON.stringify(jsonData.incassiNapoli, null, 2) + '</pre>';
        } catch (error) {
          console.error('Errore:', error);
        }
      });
    </script>
  `;
  res.send(html);
});



app.get('/data', async (req: any, res: any) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM pokemon');
    const result2 = await client.query('SELECT * FROM allenatori');
    const result3 = await client.query(`
      SELECT
      SUM(p.prezzo_acquisto * p.quantità) as incassi_napoli 
      FROM pokemon p join pokeshop p2 
      on p.id_pokeshop = p2.id
      where p2.nome_shop = 'Napoli'`);

    const data = {
      pokemon: result.rows,
      allenatori: result2.rows,
      incassiNapoli: result3.rows,
    };

    res.json(data);

    client.release();
  } catch (err) {
    console.error('Errore:', err);
    res.status(500).json({ error: 'Errore interno del server' });
  }
});

//lancio del server
app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`);
});






    
  


  