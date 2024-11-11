'use client';

import { logout } from '@/server-actions/auth';
import { useCookies } from 'react-cookie';

export default function Dashboard() {
    const [cookies] = useCookies(['user']);

    const user = (cookies.user as { name: string; email: string }) || null;

    if (!user) {
        return <div className="m-auto">You are not logged in.</div>;
    }

    return (
        <div className="m-auto flex flex-col items-center px-2 sm:px-[10%] md:px-[15%] lg:px-[25%]">
            {user && (
                <>
                    <h1 className="text-4xl font-bold mx-auto">
                        Welcome, {user?.name}!
                    </h1>
                    <p className="text-lg text-gray-500 mx-auto text-center">
                        You are now viewing your dashboard.
                    </p>
                    <pre className="text-lg text-gray-500 mx-auto">
                        {JSON.stringify(user || {}, null, 2)}
                    </pre>

                    <form action={logout}>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
                            Logout
                        </button>
                    </form>
                </>
            )}
        </div>
    );
}
