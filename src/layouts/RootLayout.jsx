import {Outlet} from "react-router-dom";
import Navbar from "/src/layouts/Navbar";
import Footer from "/src/layouts/Footer";

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default RootLayout;