import express from 'express'
import dotenv from 'dotenv'
import usersRouter from './router/users.js'
import clientsRouter from './router/clients.js'
import invoicesRouter from './router/invoices.js'
import authRouter from './router/authenticate.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.use('/api/v1', authRouter)

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/clients', clientsRouter)
app.use('/api/v1/invoices', invoicesRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})