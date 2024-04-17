import express from 'express'
import dotenv from 'dotenv'
import usersRouter from './router/users'
import clientsRouter from './router/clients'
import invoicesRouter from './router/invoices'
import authRouter from './router/authenticate'
import cors from 'cors'


dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

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