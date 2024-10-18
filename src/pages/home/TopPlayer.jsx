import {useContext, useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {gamesContext} from "/src/context/GamesContext.jsx";
import {PlayerCard} from "/src/components/Cards";

const TopPlayer = () => {
    const {getData} = useContext(gamesContext)
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData('creators');
            setPlayers(data);
        }
        fetchData()
    }, []);
    return (
        players &&
        <>
            <section className="top-player-section">
                <div className="container">
                    <h5 className="large-title">
                        top player
                    </h5>
                    <div className="player-carousel">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}
                            modules={[Autoplay]}
                            className={`playerSlide centered-slide`}
                        >
                            {players.map(player => <SwiperSlide key={player.id}><PlayerCard item={player}/></SwiperSlide>)}

                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopPlayer;