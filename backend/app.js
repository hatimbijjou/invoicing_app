const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hatim is cooking the backend')
})

app.listen(port, () => {
  console.log(`Backend is listening on port ${port}`)
})

module.exports = app