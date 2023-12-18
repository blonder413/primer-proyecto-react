import { useEffect, useState } from "react"

export const UsersApp2 = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = async() => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setUsers(data)
        } catch(error) {
            console.log(error);
        }
    }

    const manejarPeticion = () => {
        fetchUsers()
    }

    return(
        <>
            <h1>Lista de usuarios</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
            <button onClick={manejarPeticion}>Listar usuarios</button>
        </>
    )
}