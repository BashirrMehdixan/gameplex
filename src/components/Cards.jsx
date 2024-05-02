import {CiCalendarDate} from "react-icons/ci";

export const BannerCard = () => {
    return (
        <>
            <div className="banner-card-sm">
                <div className="card-img">
                    <img src="/images/games/clash.png" alt="Clash 01"/>
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
                        Super mario odessy
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