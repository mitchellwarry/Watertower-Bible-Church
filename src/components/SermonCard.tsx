import { useState } from "react";

export interface Sermon {
  title: string;
  videoId: string;
  thumbnail: string;
}

function SermonCard({ title, videoId, thumbnail }: Sermon) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="pb-10">
      <div className="relative aspect-video overflow-hidden rounded-xl shadow-md bg-black">
        {playing ? (
          <iframe
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
          />
        ) : (
          <>
            <img
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              src={thumbnail}
            />
            <div className="absolute inset-0 bg-black/30" />
            <button
              aria-label={`Play ${title}`}
              className="absolute inset-0 flex items-center justify-center group"
              onClick={() => setPlaying(true)}
            >
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-200">
                <span
                  className="material-symbols-outlined text-action-blue text-4xl"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  play_arrow
                </span>
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default SermonCard;
