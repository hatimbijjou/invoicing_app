import express from 'express'
const clientsRouter = express.Router()
import { db } from '../db/index'
import { clients } from '../db/schema'
import { eq } from 'drizzle-orm'

clientsRouter.get('/', async (req, res) => {
    try {
        const results = await db.select().from(clients)
        res.send(results)
    } catch (err) {
        res.send({
            message: err
        })
    }
})

clientsRouter.get('/:id', async (req, res) => {
    try {
        const client = await db.query.clients.findFirst({
            where: eq(clients.id, Number(req.params.id))
        })
        res.send(client)
    } catch (err) {
        res.send({
            message: err
        })
    }
})


clientsRouter.post('/', async (req, res) => {
    try {
        const client = req.body

        if (client) {
            await db.insert(clients).values(client)
            return res.send({
                message: "client added successfully",
                data: client
            })
        } else {
            throw new Error("client data is missing")
        }
    } catch (err) {
        res.send({
            message: err.message
        })
    }
})

clientsRouter.put('/:id', async (req, res) => {
    try {
        const client = req.body
        if (client) {
            await db.update(clients).set(client)
            .where(eq(clients.id, Number(req.params.id)))
            return res.send({
                message: "client updated successfully",
                data: client
            })
        }
    } catch (err) {
        res.send({
            message: err.message
        })
    }
})

clientsRouter.delete('/:id', async (req, res) => {
    try {
        await db.delete(clients)
        .where(eq(clients.id, Number(req.params.id)))
        return res.send({
            message: "client deleted successfully"
        })
    } catch (err) {
        res.send({
            message: err.message
        })
    }
})

export default clientsRouter