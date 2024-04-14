import { pgTable, serial, text, uuid, varchar, date } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    uuid: uuid('uuid').defaultRandom().primaryKey(),
    firstName: varchar('first_name', { length: 256 }),
    lastName: varchar('last_name', { length: 256 }),
    email: varchar('email', { length: 256 }).unique(),
    username: varchar('username', { length: 256 }).unique(),
    password: varchar('password', { length: 256 }),
    phone: varchar('phone', { length: 256 }),
});


export const invoices = pgTable('invoices', {
    id: serial('id').primaryKey(),
    invoiceNo: varchar('invoice_no'),
    invoiceDate: date('invoice_date', { mode: "string" }),
    invoiceDue: date('invoice_due', { mode: "string" }),
    userUUID: uuid('user_uuid').references(() => users.uuid),
    clientID: serial('client_id').references(() => clients.id),
});

export const clients = pgTable('clients', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    address: text('address'),
    email: varchar('email', { length: 256 }).unique(),
    website: varchar('website', { length: 256 }),
    userUUID: uuid('user_uuid').references(() => users.uuid, {onDelete: "cascade"}),
});