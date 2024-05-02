import {createContext, useEffect, useState} from "react";

export const gamesContext = createContext(undefined);

const GamesProvider = ({children}) => {
    const [games, setGames] = useState();
    useEffect(() => {
        fetch('/src/data/games.json')
            .then(res => res.json())
            .then(data => setGames(data.results));
    }, []);
    return (
        <gamesContext.Provider value={{games, setGames}}>
            {children}
        </gamesContext.Provider>
    )
}
export default GamesProvider;
