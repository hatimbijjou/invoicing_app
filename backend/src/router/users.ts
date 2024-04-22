import express from 'express'
import bcrypt from 'bcrypt'
const usersRouter = express.Router()
import { db } from '../db/index'
import { users } from '../db/schema'
import { eq } from 'drizzle-orm'

usersRouter.get('/', async (req, res) => {
    try {
        const results = await db.select().from(users)
        res.send(results)
    } catch (err) {
        res.send({
            message: err
        })
    }
})

usersRouter.get('/:uuid', async (req, res) => {
    try {
        const user = await db.query.users.findFirst({
            where: eq(users.uuid, req.params.uuid)
        })
        res.send(user)
    } catch (err) {
        res.send({
            message: err
        })
    }
})


usersRouter.post('/', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        
        const user = {
            ...req.body,
            password: hashedPassword
        }
        if (user) {
            await db.insert(users).values(user)
            return res.send({
                message: "user added successfully",
                data: req.body
            })
        } else {
            throw new Error("user data is missing")
        }
    } catch (err) {
        res.send({
            message: err.message
        })
    }
})

usersRouter.put('/:uuid', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        
        const user = {
            ...req.body,
            username: req.body.first_name + "." + req.body.last_name,
            password: hashedPassword
        }
        if (user) {
            await db.update(users).set(user).where(eq(users.uuid, req.params.uuid))
            return res.send({
                message: "user updated successfully"
            })
        }
    } catch (err) {
        res.send({
            message: err.message
        })
    }
})

usersRouter.delete('/:uuid', async (req, res) => {
    try {
        await db.delete(users).where(eq(users.uuid, req.params.uuid))
        return res.send({
            message: "user deleted successfully"
        })
    } catch (err) {
        res.send({
            message: err.message
        })
    }
})

export default usersRouter