import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SermonCard, { type Sermon } from "./SermonCard";

const VIDEO_IDS = [
  "jprAnpQBxGM",
  "3X7ZHHOQ_7w",
  "LX3GtIBmt4w",
  "Bw9ti58j5AI",
  "znlGrmRDiSY",
  "SnRyw4JzeyQ",
  "y7HR1i4e0Y8",
  "DkYxL7_y3Oo",
];

const SERMONS: Sermon[] = VIDEO_IDS.map((videoId) => ({
  title: "",
  videoId,
  thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
}));

function LatestSermons() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter max-w-container-max mx-auto">
      <h2 className="font-headline-md text-headline-md text-trust-navy text-center mb-stack-lg">
        Latest Sermons
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {SERMONS.map((sermon) => (
          <SwiperSlide key={sermon.videoId}>
            <SermonCard {...sermon} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default LatestSermons;
