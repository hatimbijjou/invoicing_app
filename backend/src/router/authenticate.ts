import express from 'express'
import bcrypt from 'bcrypt'
import { db } from '../db/index'
import { users } from '../db/schema'
import { or, eq } from 'drizzle-orm'
import jwt from 'jsonwebtoken'
const authRouter = express.Router()

function generateAccessToken(user: any) {
    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

authRouter.post('/login', async (req, res) => {
    try {
        const credentials = req.body
        
        if (!credentials.emailOrUsername || !credentials.password) {
            return res.status(400).json({ detail: 'Both email/username and password are required.' })
        }

        let user = await db.query.users.findFirst({
            where: or(eq(users.email, credentials.emailOrUsername), eq(users.username, credentials.emailOrUsername))
        })

        if (!user) {
            return res.status(404).json({ detail: 'username or password are incorrect.' })
        }

        const passwordMatch = await bcrypt.compare(credentials.password, user.password)

        if (!passwordMatch) {
            return res.status(401).json({ detail: 'username or password are incorrect.' })
        }

        const token = generateAccessToken({user: {
            uuid: user.uuid,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        }})

        return res.status(200).json({
            message: "You are logged in successfully.",
            token: token
        });
    } catch (err) {
        return res.status(500).json({ error: 'Internal server error.' })
    }
});


export default authRouter 