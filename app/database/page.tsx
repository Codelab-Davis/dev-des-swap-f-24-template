import { getUsers } from '@/server-actions/db';

export default async function Database() {
    const userData = await getUsers();

    return (
        <div className="m-auto flex flex-col items-center px-2 sm:px-[10%] md:px-[15%] lg:px-[25%]">
            <h1 className="text-4xl font-bold mx-auto mb-4">Users</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.id}>
                            <td className="py-2 px-4 border-b">{user.id}</td>
                            <td className="py-2 px-4 border-b">{user.name}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className="py-2 px-4 border-b">
                                {user.password}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
