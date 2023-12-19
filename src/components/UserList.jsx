import { useFetchData } from "../../hooks/useFetchData";

export const UserList = ({ endpoint }) => {
    const { datos, isLoading } = useFetchData(endpoint);

    return (
        <>
            <ul>
                {isLoading ? (
                    <p>Cargando...</p>
                ) : endpoint == "users" ? (
                    datos.map((item) => <li key={item.id}>{item.name}</li>)
                ) : (
                    datos.map((item) => <li key={item.id}>{item.body}</li>)
                )}
            </ul>
        </>
    );
};
