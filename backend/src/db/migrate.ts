import { drizzle } from 'drizzle-orm/node-postgres'
import { migrate } from 'drizzle-orm/node-postgres/migrator'
import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const pool = new pg.Pool({
    connectionString: "postgresql://macdehatim:admin@localhost:5432/invoicerdb"
})

const db = drizzle(pool)

async function main () {
    console.log('running migrations...')
    await migrate(db, {migrationsFolder:"drizzle"})
    console.log('finished running migrations')
    process.exit(0)
}

main().catch(err => {
    console.log(err)
    process.exit(0)
})