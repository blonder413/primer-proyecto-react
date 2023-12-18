import { useEffect, useState } from "react";
import { UserList } from "./UserList";

export const UseEffect = () => {
    const [endpoint, setEndpoint] = useState('users')
    const manejarPeticion = () => {
        if (endpoint == 'users') {
            setEndpoint('comments');
        } else {
            setEndpoint('users');
        }
    };

    return (
        <>
            <h1>Lista de usuarios</h1>
            <UserList endpoint={endpoint}></UserList>
            <button onClick={manejarPeticion}>Listar</button>
        </>
    );
};
