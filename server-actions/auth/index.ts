'use server';

import { db } from '@/lib/db';
import { users } from '@/drizzle/schema';
import { and, eq } from 'drizzle-orm';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signUp(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Check if user already exists
    const userExists = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1);

    if (userExists[0]) {
        throw new Error('User already exists');
    }

    const user = await db
        .insert(users)
        .values({
            name,
            email,
            password,
        })
        .returning();

    console.info('INFO: User signed up:', user[0]);

    (await cookies()).set(
        'user',
        JSON.stringify({
            id: user[0].id,
            name: user[0].name,
            email: user[0].email,
        }),
        {
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7,
        }
    );

    return redirect('/dashboard');
}

export async function login(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // TODO: I'm broken please fix me. I don't know what's wrong.
    const user = await db.select().from(users);

    if (!user[0]) {
        throw new Error('User not found');
    }

    console.info('INFO: User logged in:', user);

    (await cookies()).set(
        'user',
        JSON.stringify({
            id: user[0].id,
            name: user[0].name,
            email: user[0].email,
        }),
        {
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7,
        }
    );

    return redirect('/dashboard');
}

export async function logout() {
    (await cookies()).set('user', '', { maxAge: 0 });

    return redirect('/');
}
