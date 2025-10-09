export default function EventInfo() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-olive/5 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-olive mb-4">
            Detalles del Evento
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="font-elegant text-xl text-gray-600 italic">Dónde y cuándo celebraremos</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Ceremonia */}
          <div className="bg-white rounded-lg shadow-xl border-2 border-gold/30 p-8 hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald to-emerald-dark rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
            </div>

            <h3 className="font-display text-3xl font-bold text-olive text-center mb-4">
              Ceremonia
            </h3>

            <div className="space-y-4 font-elegant text-lg text-gray-700">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-olive">Hora</p>
                  <p>18:00 hs</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-olive">Lugar</p>
                  <p>Iglesia San Francisco</p>
                  <p className="text-sm text-gray-500">Av. Libertador 1234, CABA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fiesta */}
          <div className="bg-white rounded-lg shadow-xl border-2 border-gold/30 p-8 hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-olive to-olive-dark rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            <h3 className="font-display text-3xl font-bold text-olive text-center mb-4">Fiesta</h3>

            <div className="space-y-4 font-elegant text-lg text-gray-700">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-olive">Hora</p>
                  <p>20:00 hs</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-olive">Lugar</p>
                  <p>Salón de Eventos &quot;El Jardín&quot;</p>
                  <p className="text-sm text-gray-500">Camino del Buen Ayre Km 18, Zona Norte</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa embebido */}
        <div className="bg-white rounded-lg shadow-xl border-2 border-gold/30 overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-emerald/10 via-olive/10 to-gold/10 flex items-center justify-center">
            <div className="text-center p-8">
              <svg
                className="w-20 h-20 text-olive/30 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <p className="font-elegant text-xl text-olive/70 mb-2">Mapa del lugar</p>
              <p className="font-elegant text-sm text-gray-500">
                Aquí puedes insertar un mapa de Google Maps embebido
              </p>
              <p className="font-elegant text-xs text-gray-400 mt-4">
                Reemplaza este placeholder con un iframe de Google Maps
              </p>
            </div>
          </div>
        </div>

        {/* Código de vestimenta */}
        <div className="mt-12 text-center bg-gradient-to-r from-emerald/10 via-gold/10 to-olive/10 rounded-lg p-8 border-2 border-gold/20">
          <h3 className="font-display text-2xl font-bold text-olive mb-3">Código de Vestimenta</h3>
          <p className="font-elegant text-xl text-gray-700">Formal / Elegante</p>
          <p className="font-elegant text-sm text-gray-500 mt-2">
            Por favor, evita vestir de blanco
          </p>
        </div>
      </div>
    </section>
  );
}
