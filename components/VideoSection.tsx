'use client';

import { useState, useRef } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="relative z-10 py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
          {/* Box con borde decorativo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-gold/40 p-3 md:p-4">
            {/* Video Container */}
            <div
              className="relative rounded-xl overflow-hidden shadow-lg"
              style={{ aspectRatio: '9/16' }}
            >
              <video
                ref={videoRef}
                playsInline
                preload="none"
                poster="/images/general/thumbnail.png"
                controls={isPlaying}
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                className="w-full h-full object-cover"
                onPause={handlePause}
                onEnded={handlePause}
              >
                <source src="/images/general/videocasamiento.mp4" type="video/mp4" />
              </video>

              {/* Botón de Play */}
              {!isPlaying && (
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  aria-label="Reproducir video"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 group-active:scale-95 transition-transform">
                    <svg
                      className="w-10 h-10 md:w-12 md:h-12 text-olive ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
