import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SermonCard, { type Sermon } from "./SermonCard";

const CHANNEL_ID = "UC5YQiAoS0b4JnflrIbGw4TA";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
// YouTube's feed endpoint doesn't send CORS headers, so it can't be fetched
// directly from the browser. This routes through a public CORS proxy as a
// stopgap — swap this for a server-side proxy (e.g. a Netlify/Vercel
// function) once hosting is decided, since public proxies can rate-limit
// or go down.
const PROXY_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(FEED_URL)}`;
const MAX_SERMONS = 6;

function parseFeed(xml: string): Sermon[] {
  const doc = new DOMParser().parseFromString(xml, "text/xml");
  const entries = Array.from(doc.getElementsByTagName("entry"));

  return entries.slice(0, MAX_SERMONS).map((entry) => ({
    title: entry.getElementsByTagName("title")[0]?.textContent ?? "",
    videoId: entry.getElementsByTagName("yt:videoId")[0]?.textContent ?? "",
    thumbnail:
      entry.getElementsByTagName("media:thumbnail")[0]?.getAttribute("url") ??
      "",
  }));
}

function LatestSermons() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    let cancelled = false;

    fetch(PROXY_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Feed request failed: ${res.status}`);
        return res.text();
      })
      .then((xml) => {
        if (cancelled) return;
        setSermons(parseFeed(xml));
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter max-w-container-max mx-auto">
      <h2 className="font-headline-md text-headline-md text-trust-navy text-center mb-stack-lg">
        Latest Sermons
      </h2>
      {status === "error" && (
        <p className="font-body-md text-body-md text-on-surface-variant text-center">
          We couldn&apos;t load the latest sermons right now. Please check back
          shortly.
        </p>
      )}
      {status === "ready" && (
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
          {sermons.map((sermon) => (
            <SwiperSlide key={sermon.videoId}>
              <SermonCard {...sermon} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}

export default LatestSermons;
