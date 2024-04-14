import express from 'express'
const invoicesRouter = express.Router()
import { db } from '../db/index'
import { invoices } from '../db/schema'
import { eq } from 'drizzle-orm'

invoicesRouter.get('/', async (req, res) => {
    try {
        const results = await db.select().from(invoices)
        res.send(results)
    } catch (err) {
        res.send({
            message: err
        })
    }
})

invoicesRouter.get('/:id', async (req, res) => {
    try {
        const invoice = await db.query.invoices.findFirst({
            // where: eq(invoices.id, req.params.id)
        })
        res.send(invoice)
    } catch (err) {
        res.send({
            message: err
        })
    }
})


invoicesRouter.post('/', async (req, res) => {
    try {
        const invoice = req.body
        if (invoice) {
            await db.insert(invoices).values(invoice)
            return res.send({
                message: "invoice added successfully",
                data: invoice
            })
        } else {
            throw new Error("invoice data is missing")
        }
    } catch (err) {
        res.send({
            message: err.message
        })
    }
})

invoicesRouter.put('/:id', async (req, res) => {
    try {
        const invoice = req.body
        if (invoice) {
            await db.update(invoices).set(invoice)
            //.where(eq(invoices.id, req.params.id))
            return res.send({
                message: "invoice updated successfully",
                data: invoice
            })
        }
    } catch (err) {
        res.send({
            message: err.message
        })
    }
})

invoicesRouter.delete('/:id', async (req, res) => {
    try {
        await db.delete(invoices)
        //.where(eq(invoices.id, req.params.id))
        return res.send({
            message: "invoice deleted successfully"
        })
    } catch (err) {
        res.send({
            message: err.message
        })
    }
})

export default invoicesRouter