export default function Gallery() {
  // Placeholders para las imágenes - puedes reemplazarlos con URLs reales
  const photos = [
    { id: 1, caption: 'Nuestro primer viaje juntos' },
    { id: 2, caption: 'Atardecer en la playa' },
    { id: 3, caption: 'Celebrando su cumpleaños' },
    { id: 4, caption: 'Aventura en la montaña' },
    { id: 5, caption: 'Cena romántica' },
    { id: 6, caption: 'El día de la propuesta' },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-olive mb-4">
            Nuestros Momentos
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="font-elegant text-xl text-gray-600 italic">
            Recuerdos que atesoramos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg shadow-lg border-2 border-gold/20 aspect-square bg-gradient-to-br from-emerald/20 via-olive/20 to-gold/20 hover:scale-105 transition-transform duration-300"
            >
              {/* Placeholder para imagen */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <svg
                    className="w-16 h-16 text-olive/30 mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="font-elegant text-sm text-olive/50">
                    Foto {index + 1}
                  </p>
                </div>
              </div>

              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="font-elegant text-white text-lg p-6 w-full">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-elegant text-gray-500 mt-12 italic">
          * Reemplaza estas imágenes placeholder con tus fotos reales
        </p>
      </div>
    </section>
  );
}

