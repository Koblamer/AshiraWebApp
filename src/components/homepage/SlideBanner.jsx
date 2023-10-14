// import { Link } from "react-router-dom";s
import HPPic1 from "../../assets/PerspectivePic/HP-Pic1.jpg";
import HPPic2 from "../../assets/PerspectivePic/HP-Pic2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";

export default function SlideBanner() {
  // const slide = {<img src={HPPic1} alt="Picture" width={1735} />}
  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 9000,
        disableOnInteraction: true,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={HPPic1} alt="Picture" width={1735} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={HPPic2} alt="Picture" width={1735} />
      </SwiperSlide>
    </Swiper>
  );
}
