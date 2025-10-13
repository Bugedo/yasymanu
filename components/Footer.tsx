export default function Footer() {
  return (
    <footer className="relative z-10 bg-transparent text-white pt-16 pb-2 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Ornamento superior */}
        <div className="mb-8 flex justify-center">
          <svg width="100" height="20" viewBox="0 0 100 20" className="text-gold fill-current">
            <path d="M50 0 L55 10 L50 20 L45 10 Z M30 5 L35 10 L30 15 L25 10 Z M70 5 L75 10 L70 15 L65 10 Z" />
          </svg>
        </div>

        {/* Mensaje principal */}
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-8 text-gold">
          Yas <span className="text-2xl md:text-3xl">&</span> Manu
        </h3>

        {/* Información de contacto */}
        <div className="mb-8">
          <p className="font-display text-lg font-semibold mb-3 text-gold">
            ¿Tenes alguna pregunta?
          </p>
          <a
            href="https://wa.me/5493513224810"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-elegant text-white/90 hover:text-gold transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Contactate con nosotros
          </a>
        </div>

        {/* Ornamento inferior */}
        <div className="mb-6 flex justify-center">
          <svg width="60" height="12" viewBox="0 0 60 12" className="text-gold/50 fill-current">
            <path d="M30 0 L33 6 L30 12 L27 6 Z M18 3 L21 6 L18 9 L15 6 Z M42 3 L45 6 L42 9 L39 6 Z" />
          </svg>
        </div>
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
