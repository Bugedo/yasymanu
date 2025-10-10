export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald/10 via-white to-olive/10 overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-gold rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-emerald rounded-full"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Ornamento superior */}
        <div className="mb-8 flex justify-center">
          <svg width="100" height="20" viewBox="0 0 100 20" className="text-gold fill-current">
            <path d="M50 0 L55 10 L50 20 L45 10 Z M30 5 L35 10 L30 15 L25 10 Z M70 5 L75 10 L70 15 L65 10 Z" />
          </svg>
        </div>

        {/* Nombres de los novios */}
        <h1 className="font-display text-6xl md:text-8xl font-bold text-olive mb-4 tracking-wide">
          Yasmin & Manuel
        </h1>

        <div className="my-8">
          <div className="w-16 h-px bg-gold mx-auto"></div>
        </div>

        {/* Fecha del evento */}
        <p className="font-elegant text-2xl md:text-3xl text-olive-light mb-6">Nos casamos</p>
        <p className="font-display text-5xl md:text-7xl font-semibold text-olive mb-8">
          <span className="text-6xl md:text-8xl">7</span> de Noviembre
        </p>

        {/* Mensaje */}
        <p className="font-elegant text-xl md:text-2xl text-gray-600 italic max-w-2xl mx-auto">
          Nuestro éxito es el amor que nos rodea y queremos que formes parte de él en nuestra boda
        </p>

        {/* Ornamento inferior */}
        <div className="mt-12 flex justify-center">
          <svg width="100" height="20" viewBox="0 0 100 20" className="text-gold fill-current">
            <path d="M50 0 L55 10 L50 20 L45 10 Z M30 5 L35 10 L30 15 L25 10 Z M70 5 L75 10 L70 15 L65 10 Z" />
          </svg>
        </div>
      </div>

      {/* Flecha de scroll */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
