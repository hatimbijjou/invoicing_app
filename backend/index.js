import express from 'express'
import dotenv from 'dotenv'
import usersRouter from './router/users.js'
dotenv.config()

const app = express()
const port = process.env.PORT

app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})