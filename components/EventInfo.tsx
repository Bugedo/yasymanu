'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function EventInfo() {
  const [showMaps, setShowMaps] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleToggleMaps = () => {
    if (showMaps) {
      // Si está abierto, iniciar animación de cierre
      setIsClosing(true);
      setTimeout(() => {
        setShowMaps(false);
        setIsClosing(false);
      }, 600); // Duración de la animación
    } else {
      // Si está cerrado, abrir directamente
      setShowMaps(true);
    }
  };
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

        <div className="grid md:grid-cols-2 gap-8 mb-12 md:items-stretch">
          {/* Ceremonia */}
          <div className="bg-white rounded-lg shadow-xl border-2 border-gold/30 overflow-hidden hover:shadow-2xl transition-shadow flex flex-col">
            {/* Imagen del Convento */}
            <div className="relative h-64 w-full">
              <Image
                src="/images/events/conventosanalfondo.jpg"
                alt="Convento San Alfonso"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-display text-3xl font-bold text-olive text-center mb-6">
                Ceremonia
              </h3>

              <div className="text-center space-y-3">
                <div>
                  <p className="font-display text-3xl font-bold text-olive">Convento San Alfonso</p>
                  <p className="font-elegant text-2xl text-gray-600 mt-2">
                    San Clemente 190, Villa Allende
                  </p>
                </div>
                <div className="pt-4">
                  <p className="font-display text-2xl font-semibold text-olive">20:30 hs</p>
                </div>
              </div>

              {/* Botón desplegable para el mapa */}
              <div className="mt-auto pt-6">
                <button
                  onClick={handleToggleMaps}
                  className="w-full bg-gradient-to-r from-olive to-olive-dark text-white font-elegant py-3 px-4 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  CÓMO LLEGAR A LA CEREMONIA
                  <svg
                    className={`w-5 h-5 transition-transform duration-600 ${showMaps ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Contenido desplegable */}
                {showMaps && (
                  <div
                    className={`mt-4 border-t border-gold/20 pt-4 ${isClosing ? 'animate-slideUp' : 'animate-slideDown'}`}
                  >
                    <div className="aspect-video mb-4">
                      <iframe
                        src="https://maps.google.com/maps?q=Convento+San+Alfonso,San+Clemente+190,Villa+Allende,Córdoba&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/9DNDjEpPDkNsz6td7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-gradient-to-r from-olive/80 to-olive-dark/80 text-white font-elegant py-2 rounded-lg hover:shadow-lg transition-all"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Recepción */}
          <div className="bg-white rounded-lg shadow-xl border-2 border-gold/30 overflow-hidden hover:shadow-2xl transition-shadow flex flex-col">
            {/* Imagen del Salón */}
            <div className="relative h-64 w-full">
              <Image
                src="/images/events/salonbolgheri.jpg"
                alt="Salon Bolgheri"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-display text-3xl font-bold text-olive text-center mb-6">
                Recepción
              </h3>

              <div className="text-center">
                <div>
                  <p className="font-display text-3xl font-bold text-olive">Salon Bolgheri</p>
                  <p className="font-elegant text-2xl text-gray-600 mt-2">
                    Derqui 703, Villa Allende
                  </p>
                </div>
              </div>

              {/* Botón desplegable para el mapa */}
              <div className="mt-auto pt-6">
                <button
                  onClick={handleToggleMaps}
                  className="w-full bg-gradient-to-r from-olive to-olive-dark text-white font-elegant py-3 px-4 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  CÓMO LLEGAR A LA RECEPCIÓN
                  <svg
                    className={`w-5 h-5 transition-transform duration-600 ${showMaps ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Contenido desplegable */}
                {showMaps && (
                  <div
                    className={`mt-4 border-t border-gold/20 pt-4 ${isClosing ? 'animate-slideUp' : 'animate-slideDown'}`}
                  >
                    <div className="aspect-video mb-4">
                      <iframe
                        src="https://maps.google.com/maps?q=Salon+Bolgheri,Derqui+703,Villa+Allende,Córdoba&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/wNG3E1tjp7WD4LQY8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-gradient-to-r from-olive/80 to-olive-dark/80 text-white font-elegant py-2 rounded-lg hover:shadow-lg transition-all"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Código de vestimenta */}
        <div className="mt-12 text-center bg-gradient-to-r from-emerald/10 via-gold/10 to-olive/10 rounded-lg p-8 border-2 border-gold/20">
          <h3 className="font-display text-2xl font-bold text-olive mb-3">Código de Vestimenta</h3>
          <p className="font-elegant text-xl text-gray-700 mb-6">Elegante/Sport</p>

          <p className="font-elegant text-xl text-gray-700 font-semibold mb-4">
            Por favor <span className="font-bold">NO</span> vestir de blanco ni gama de verdes
          </p>

          {/* Colores a evitar */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 shadow-sm"></div>
            <div className="w-8 h-8 rounded-full bg-emerald-light shadow-sm"></div>
            <div className="w-8 h-8 rounded-full bg-emerald shadow-sm"></div>
            <div className="w-8 h-8 rounded-full bg-emerald-dark shadow-sm"></div>
            <div className="w-8 h-8 rounded-full bg-olive shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
