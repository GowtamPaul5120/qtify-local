import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import carouselLeft from "../../../assets/images/carouselLeft.png";
import carouselRight from "../../../assets/images/carouselRight.png";
import AlbumCard from "../AlbumCard";

const SliderAlbum = ({ albums }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <button
        ref={prevRef}
        style={{
          position: "absolute",
          top: "40%",
          left: "-20px",
          zIndex: 10,
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <img src={carouselLeft} alt="prev" />
      </button>

      <button
        ref={nextRef}
        style={{
          position: "absolute",
          top: "40%",
          right: "-20px",
          zIndex: 10,
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <img src={carouselRight} alt="next" />
      </button>
      <Swiper
        modules={[Navigation]}
        slidesPerView={7}
        spaceBetween={40}
        pagination={false}
        loop
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {albums.map((album, index) => (
          <SwiperSlide key={index}>
            <AlbumCard album={album} />;
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderAlbum;
