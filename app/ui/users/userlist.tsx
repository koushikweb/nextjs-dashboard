import Link from 'next/link';
import React from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }
    return res.json();
};

const UsersList: React.FC = async () => {
    const users = await fetchUsers();

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                      <Link href={`/dashboard/users/${user.id}`}>
                    {user.name} ({user.email})
                    </Link>  
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;

