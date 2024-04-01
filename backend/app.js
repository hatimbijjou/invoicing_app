const express = require('express')
const app = express()
const port = 3000
const pgp = require('pg-promise')()
const db = pgp('postgres://macdehatim:admin@localhost:5432/invoicerdb')



app.get('/', async (req, res) => {
  try {
    let weather = await db.any('SELECT * FROM weather');
    res.send(JSON.stringify(weather));
  } catch (error) {
    console.log('ERROR:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Backend is listening on port ${port}`)
})

module.exports = app