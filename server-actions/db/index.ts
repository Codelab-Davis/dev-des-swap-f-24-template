'use server';

import { db } from '@/lib/db';
import { users } from '@/drizzle/schema';

export async function getUsers() {
    return db.select().from(users);
}
