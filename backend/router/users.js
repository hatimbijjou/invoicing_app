import express from 'express'
const usersRouter = express.Router()
import { db } from '../db/index.js'
import { users } from '../db/schema.js'

usersRouter.get('/', async (req, res) => {
    try {
        const results = await db.select().from(users)
        res.send(JSON.stringify(results))
    } catch (err) {
        res.send(console.log(err))
    }
})

export default usersRouter