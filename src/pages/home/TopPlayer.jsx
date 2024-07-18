import OwlCarousel from "react-owl-carousel";
import {PlayerCard} from "/src/components/Cards";

const TopPlayer = () => {
    return (
        <>
            <section className="top-player-section">
                <div className="container">
                    <h5 className="large-title">
                        top player
                    </h5>
                    <div className="player-carousel">
                        <OwlCarousel
                            className='owl-theme'
                            items={3}
                            autoplay={true}
                            margin={10}
                            startPosition={3}
                            autoplaySpeed={500}
                            loop
                            center={true}
                            navText={[
                                '<span class="arrow prev">‹</span>',
                                '<span class="arrow next">›</span>'
                            ]}
                            nav
                            dots={false}
                        >
                            <div className={"item"}>
                                <PlayerCard/>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopPlayer;