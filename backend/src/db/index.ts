import pg from "pg"
import { drizzle } from "drizzle-orm/node-postgres"
import * as schema from './schema'


const client = new pg.Client({
    connectionString: "postgresql://macdehatim:admin@localhost:5432/invoicerdb"
})

client.connect()
export const db = drizzle(client, {schema: schema})