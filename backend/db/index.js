import pg from "pg"
import { drizzle } from "drizzle-orm/node-postgres"
import * as schema from './schema.js'


const client = new pg.Client({
    connectionString: "postgresql://macdehatim:admin@localhost:5432/invoicerdb"
})

await client.connect()
export const db = drizzle(client, {schema: schema})