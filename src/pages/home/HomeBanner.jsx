import {Link} from "react-router-dom";

const HomeBanner = () => {
    return (
        <>
            <section className={"home-banner"}>
                <div className="bg-gradient-green"></div>
                <div className="container">
                    <div className="flex banner-body">
                        <div className="left-item">
                            <ul className="web-info">
                                <li>Play</li>
                                <li>Earn</li>
                                <li>Enjoy</li>
                            </ul>
                            <h2 className="banner-head">
                                ultimate
                                <span className={"block text-orange"}>gamer&apos;s</span>
                                haven
                            </h2>
                            <Link to={"/games"} className={"btn btn-orange btn-play"}>Play now</Link>
                        </div>
                        <div className="middle-item">
                            <div className="middle-bg">
                                <img src="/images/backgrounds/bg-1.png" alt="Background"/>
                            </div>
                            <div className="middle-hero">
                                <img src="/images/heroes/hero.png" alt="Hero"/>
                            </div>
                        </div>
                        <div className="right-item">
                            <div className="live-tab">
                                <ul className="winner-list">
                                    <li>
                                        <h3 className="medium-title">
                                            last winner
                                        </h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lines">

                </div>
            </section>
        </>
    )
}

export default HomeBanner;