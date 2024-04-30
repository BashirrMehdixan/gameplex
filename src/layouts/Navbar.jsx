import {NavLink} from 'react-router-dom';
import {CiWallet} from "react-icons/ci";
import {IoIosNotifications} from "react-icons/io";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="container">
                        <div className="navbar">
                            <NavLink to={"/"} className={"logo"}>
                                <img src="/images/favicon.png" alt="Favicon"/>
                                <img src="/images/logo.png" alt="Gameplex Logo"/>
                            </NavLink>
                            <ul className="nav-menu">
                                <li>
                                    <NavLink to={"/"}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/tournaments"}>
                                        Tournaments
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/games"}>
                                        Game
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/team"}>
                                        Team
                                    </NavLink>
                                </li>
                                <li>
                                    <button className="btn btn-orange btn-wallet">
                                        <span>
                                            <CiWallet/>
                                        </span>
                                        <span>
                                            Connect Wallet
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-notification">
                                        <IoIosNotifications/>
                                    </button>
                                </li>
                                {/*<li>*/}
                                {/*    <NavLink to={"/signup"}>*/}
                                {/*        Signup*/}
                                {/*    </NavLink>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <NavLink to={"/login"}>*/}
                                {/*        Login*/}
                                {/*    </NavLink>*/}
                                {/*</li>*/}

                                <li>
                                    <div className="btn-profile">
                                        <div className="user-img">
                                            <img src="/images/users/81.jpg" alt=""/>
                                        </div>
                                        <div className="username">David Malan</div>
                                        <MdOutlineKeyboardArrowDown/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;