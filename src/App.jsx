import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Layouts
import RootLayout from "/src/layouts/RootLayout";

// Pages
import Home from "/src/pages/home/Home";

// Css
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
