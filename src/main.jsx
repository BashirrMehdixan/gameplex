import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '/src/App';
import UsersProvider from "/src/context/UsersContext";
import GamesProvider from "/src/context/GamesContext";

ReactDOM.createRoot(document.getElementById('root')).render(
    <GamesProvider>
        <UsersProvider>
            <App/>
        </UsersProvider>
    </GamesProvider>
)
