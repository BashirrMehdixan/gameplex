import {CiCalendarDate, CiStar} from "react-icons/ci";
import {BsPersonAdd} from "react-icons/bs";
import {RiVipDiamondLine} from "react-icons/ri";
import {FaStar} from "react-icons/fa";

export const BannerCard = ({id, name, background_image, playing, slug}) => {
    return (
        <>
            <div className="banner-card-sm">
                <div className="card-img">
                    <img src={background_image} alt="Clash 01"/>
                    <p className="game-date">
                        <CiCalendarDate/>
                        <span>15.05.2024</span>
                    </p>
                    <div className="play-status">
                        Playing
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="small-title">
                        {name}
                    </h5>
                    <ul className="game-price">
                        <li>
                            <img src="/images/icons/bitcoin.png" alt=""/>
                            <span>75</span>
                        </li>
                        <li>
                            <img src="/images/icons/tether.png" alt=""/>
                            <span>$49.97</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export const PlayerCard = () => {
    return (
        <>
            <div className="top-player-card">
                <div className="top-card">
                    <div className="user-info">
                        <div className="user-img">
                            <img src="/images/avatars/avatar1.png" alt=""/>
                            <span className="count-badge">1</span>
                        </div>
                        <div className="user-name">
                            <h5 className="small-title">
                                Jane Cooper
                            </h5>
                            <p className="user-position">Duelist</p>
                        </div>
                    </div>
                    <button className="btn btn-transparent">
                        <BsPersonAdd/>
                    </button>
                </div>
                <div className="bottom-card">
                    <div className="bottom-item">
                        <h6 className="extra-small-title">
                            Score
                        </h6>
                        <ul className="ratings">
                            <li>
                                <CiStar/>
                            </li>
                            <li>
                                <FaStar/>
                            </li>
                            <li>
                                <FaStar/>
                            </li>
                            <li>
                                <FaStar/>
                            </li>
                            <li>
                                <FaStar/>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-item">
                        <h6 className="extra-small-title">
                            Rank
                        </h6>
                        <span>
                            <RiVipDiamondLine/>
                            Diamond
                        </span>
                    </div>
                    <div className="bottom-item">
                        <h6 className="extra-small-title">
                            Region
                        </h6>
                        <span className={"region-name"}>EUW</span>
                    </div>
                    <div className="bottom-item">
                        <h6 className="extra-small-title">
                            Team
                        </h6>
                        <span className={"team-name"}>Fire</span>
                    </div>
                </div>
            </div>
        </>
    )
}