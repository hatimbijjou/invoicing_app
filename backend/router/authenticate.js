import express from 'express'
import bcrypt from 'bcrypt'
const authRouter = express.Router()
import { db } from '../db/index.js'
import { users } from '../db/schema.js'
import { or, eq } from 'drizzle-orm'

authRouter.post('/login', async (req, res) => {
    try {
        const credentials = req.body
        
        if (!credentials.emailOrUsername || !credentials.password) {
            return res.status(400).json({ error: 'Both email/username and password are required.' })
        }

        let user = await db.query.users.findFirst({
            where: or(eq(users.email, credentials.emailOrUsername), eq(users.username, credentials.emailOrUsername))
        })

        if (!user) {
            return res.status(404).json({ error: 'User not found.' })
        }

        const passwordMatch = await bcrypt.compare(credentials.password, user.password)

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password.' })
        }

        return res.status(200).json({
            message: "You are logged in successfully.",
            data: user
        });
    } catch (err) {
        return res.status(500).json({ error: 'Internal server error.' })
    }
});


export default authRouter 