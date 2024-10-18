import {useContext, useEffect, useState} from "react";
import {BannerCard} from "/src/components/Cards";
import {gamesContext} from "/src/context/GamesContext";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules"

const BannerSlide = () => {
    const {getData} = useContext(gamesContext);
    const [games, setGames] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const gamesData = await getData('games');
            setGames(gamesData);
        };
        fetchData()
    }, []);
    return (
        games &&
        <>
            <div className="banner-carousel">
                <div className="container glide">
                    <Swiper
                        loop={true}
                        slidesPerView={5}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className={`bannerSlide centered-slide`}
                    >
                        {games.map(game => <SwiperSlide key={game.id}><BannerCard item={game}/></SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </>
    )
}
export default BannerSlide;