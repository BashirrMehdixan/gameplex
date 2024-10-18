import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const gamesContext = createContext(undefined);

const GamesProvider = ({children}) => {
    const api_url = import.meta.env.VITE_APP_API_URL;
    const api_key = import.meta.env.VITE_APP_API_KEY;
    const getData = async (endpoint) => {
        const response = await axios.get(`${api_url}${endpoint}?key=${api_key}`);
        return response.data.results;
    }
    return (
        <gamesContext.Provider value={{getData}}>
            {children}
        </gamesContext.Provider>
    )
}
export default GamesProvider;
