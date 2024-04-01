const pgp = require('pg-promise')()
const db = pgp('postgres://admin:admin@localhost:5432/invoicerdb')

db.one('SELECT $1 AS value', 123)
  .then((data) => {
    console.log('DATA:', data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
})

module.exports = db