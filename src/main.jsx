import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '/src/App';
import GamesProvider from "/src/context/GamesContext";

ReactDOM.createRoot(document.getElementById('root')).render(
    <GamesProvider>
        <App/>
    </GamesProvider>
)
