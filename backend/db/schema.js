import { pgTable, serial, text, uuid, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    uuid: uuid('uuid').defaultRandom().primaryKey(),
    firstName: varchar('first_name', { length: 256 }),
    lastName: varchar('last_name', { length: 256 }),
    email: varchar('email', { length: 256 }).unique(),
    password: varchar('password', { length: 256 }),
    phone: varchar('phone', { length: 256 }),
});