import {Link} from "react-router-dom";
import Icon from "@mdi/react";
import {mdiCalendarBlankOutline, mdiDiamondOutline, mdiHandshakeOutline, mdiStar, mdiStarHalfFull, mdiStarOutline} from "@mdi/js";

export const BannerCard = ({item}) => {
    return (
        <>
            <div className="banner-card-sm card">
                <div className="card-img">
                    <img src={item.background_image} alt=''/>
                    <p className="game-date">
                        <Icon path={mdiCalendarBlankOutline} size={1}/>
                        <span>15.05.2024</span>
                    </p>
                    <div className="play-status">
                        Playing
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="small-title">
                        <Link to={`games/${item.slug}`}>
                            {item.name}
                        </Link>
                    </h5>
                    <ul className="game-price">
                        <li>
                            <img src={"/images/icons/bitcoin.png"} alt=""/>
                            <span>75</span>
                        </li>
                        <li>
                            <img src={"/images/icons/tether.png"} alt=""/>
                            <span>$49.97</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export const PlayerCard = ({item}) => {
    return (
        <>
            <div className="top-player-card card">
                <div className="top-card">
                    <div className="user-info">
                        <div className="user-img">
                            <img src={`${item.image}`} alt=""/>
                            <span className="count-badge">1</span>
                        </div>
                        <div className="user-name">
                            <h5 className="small-title">
                                <Link to={`players/${item.slug}`}>
                                    {item.name}
                                </Link>
                            </h5>
                            <p className="user-position">Duelist</p>
                        </div>
                    </div>
                    <button className="btn btn-transparent">
                        <Icon path={mdiHandshakeOutline} size={1}/>
                    </button>
                </div>
                <div className="bottom-card">
                    <div className="bottom-item">
                        <h6 className="extra-small-title">
                            Score
                        </h6>
                        <ul className="ratings">
                            <li>
                                <Icon path={mdiStar} size={1}/>
                            </li>
                            <li>
                                <Icon path={mdiStar} size={1}/>
                            </li>
                            <li>
                                <Icon path={mdiStar} size={1}/>
                            </li>
                            <li>
                                <Icon path={mdiStarHalfFull} size={1}/>
                            </li>
                            <li>
                                <Icon path={mdiStarOutline} size={1}/>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-item">
                        <h6 className="extra-small-title">
                            Rank
                        </h6>
                        <span className={`flex`}>
                            <Icon path={mdiDiamondOutline} size={0.8}/>
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