import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '/src/App';
import UsersProvider from "/src/context/UsersContext";

ReactDOM.createRoot(document.getElementById('root')).render(
    <UsersProvider>
        <App/>
    </UsersProvider>
)
