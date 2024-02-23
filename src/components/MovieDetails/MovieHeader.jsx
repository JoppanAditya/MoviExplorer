import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MovieHeader = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      allowTouchMove={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="Header-img"
    >
      {images.length > 0 &&
        images.map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="Detailpg-header-container" style={{ backgroundImage: `url(${image})` }} alt={`Backdrop ${index}`}></div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MovieHeader;
