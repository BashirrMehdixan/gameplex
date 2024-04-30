import {createContext, useEffect, useState} from "react"

export const usersContext = createContext(undefined);
const UsersProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    console.log(users);
    return (
        <usersContext.Provider value={users}>
            {children}
        </usersContext.Provider>
    )
}

export default UsersProvider;