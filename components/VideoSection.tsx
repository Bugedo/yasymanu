'use client';

export default function VideoSection() {
  return (
    <section className="relative z-10 py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Contenedor del video - centrado en desktop, casi full width en mobile */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
            {/* Box con borde decorativo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-gold/40 p-3 md:p-4">
              {/* Video */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <video
                  controls
                  playsInline
                  className="w-full h-auto"
                  poster="/images/general/video-poster.jpg"
                >
                  <source src="/images/general/videocasamiento.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

