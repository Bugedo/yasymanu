export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-olive to-olive-dark text-white pt-16 pb-2 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Ornamento superior */}
        <div className="mb-8 flex justify-center">
          <svg width="100" height="20" viewBox="0 0 100 20" className="text-gold fill-current">
            <path d="M50 0 L55 10 L50 20 L45 10 Z M30 5 L35 10 L30 15 L25 10 Z M70 5 L75 10 L70 15 L65 10 Z" />
          </svg>
        </div>

        {/* Mensaje principal */}
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-8 text-gold">
          Yasmin & Manuel
        </h3>

        {/* Información de contacto */}
        <div className="mb-8">
          <p className="font-display text-lg font-semibold mb-3 text-gold">
            ¿Tienes alguna pregunta?
          </p>
          <a
            href="tel:+5493513224810"
            className="inline-flex items-center gap-2 font-elegant text-white/90 hover:text-gold transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +54 9 3513 22-4810
          </a>
        </div>

        {/* Ornamento inferior y copyright */}
        <div className="mb-6 flex justify-center">
          <svg width="60" height="12" viewBox="0 0 60 12" className="text-gold/50 fill-current">
            <path d="M30 0 L33 6 L30 12 L27 6 Z M18 3 L21 6 L18 9 L15 6 Z M42 3 L45 6 L42 9 L39 6 Z" />
          </svg>
        </div>

        <p className="font-elegant text-sm text-white/60">
          © 2025 Yasmin & Manuel. Con amor, para siempre.
        </p>
      </div>

      {/* Franja de créditos */}
      <div className="mt-3 pt-2 border-t border-white/10">
        <div className="text-center">
          <a
            href="https://www.developingbridges.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-elegant text-xs text-white/50 hover:text-gold transition-colors"
          >
            Powered by <span className="font-semibold">Developing Bridges</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
