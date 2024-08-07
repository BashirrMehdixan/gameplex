import {useContext} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {BannerCard} from "/src/components/Cards";
import {gamesContext} from "/src/context/GamesContext";

const BannerSlide = () => {
    const {games} = useContext(gamesContext);
    return (
        games &&
        <>
            <div className="banner-carousel">
                <div className="container">
                    <OwlCarousel
                        className='owl-theme'
                        items={4}
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
                        {games.map((game, index) => <div className={"item"} key={index}><BannerCard {...game}/></div>)}
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}
export default BannerSlide;