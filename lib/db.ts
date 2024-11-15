import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

export const db = drizzle(
    new Database('dev-des-swap.db', {
        fileMustExist: true,
        verbose: console.log,
    })
);
