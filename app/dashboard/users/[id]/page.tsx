import React from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string
}

const fetchUser = async (id: number): Promise<User> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch user');
    }
    return res.json();
};

const UserPage: React.FC<{ params: { id: number } }> = async ({ params }) => {
    const user = await fetchUser(params.id);

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
};

export default UserPage;