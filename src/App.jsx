import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Layouts
import RootLayout from "/src/layouts/RootLayout";

// Pages
import Home from "/src/pages/home/Home";
import Tournaments from "/src/pages/tournaments/Tournaments";
import TournamentDetail from "/src/pages/tournaments/TournamentDetail";
import Games from "/src/pages/games/Games";
import GameDetail from "/src/pages/games/GameDetail";

// Css
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '/src/scss/App.css';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                },
                {
                    path: "tournaments",
                    element: <Tournaments/>
                },
                {
                    path: "tournaments/:id",
                    element: <TournamentDetail/>
                },
                {
                    path: "games",
                    element: <Games/>
                },
                {
                    path: "/games/:slug",
                    element: <GameDetail/>
                },
                {
                    path: "*",
                    element: <Home/>
                }
            ]
        }
    ])
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
