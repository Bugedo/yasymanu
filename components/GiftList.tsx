export default function GiftList() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-emerald/5 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-olive mb-4">
            Lista de Regalos
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="font-elegant text-xl text-gray-600 italic">
            Tu presencia es nuestro mejor regalo
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl border-2 border-gold/30 p-8 md:p-12 text-center">
          <div className="mb-8">
            <svg className="w-20 h-20 text-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>

          <p className="font-elegant text-xl text-gray-700 leading-relaxed mb-8">
            Si deseas hacernos un regalo, lo más importante para nosotros es que nos acompañes en este día tan especial. 
            Sin embargo, si te gustaría contribuir a nuestro futuro juntos, hemos preparado algunas opciones:
          </p>

          <div className="space-y-6 mb-10">
            {/* Opción 1: Lista en tienda */}
            <div className="bg-gradient-to-br from-emerald/10 to-olive/10 rounded-lg p-6 border-2 border-gold/20">
              <h3 className="font-display text-2xl font-bold text-olive mb-3">
                Lista de Novios
              </h3>
              <p className="font-elegant text-lg text-gray-700 mb-4">
                Hemos creado una lista en las siguientes tiendas:
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-block bg-gradient-to-r from-emerald to-olive text-white font-display text-lg font-semibold px-8 py-3 rounded-lg hover:from-emerald-dark hover:to-olive-dark transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Tienda 1
                </a>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-r from-emerald to-olive text-white font-display text-lg font-semibold px-8 py-3 rounded-lg hover:from-emerald-dark hover:to-olive-dark transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Tienda 2
                </a>
              </div>
            </div>

            {/* Opción 2: Luna de miel */}
            <div className="bg-gradient-to-br from-emerald/10 to-olive/10 rounded-lg p-6 border-2 border-gold/20">
              <h3 className="font-display text-2xl font-bold text-olive mb-3">
                Luna de Miel
              </h3>
              <p className="font-elegant text-lg text-gray-700 mb-4">
                También puedes ayudarnos a hacer realidad nuestra luna de miel soñada
              </p>
              <div className="bg-white rounded-lg p-4 inline-block">
                <p className="font-elegant text-sm text-gray-600 mb-1">CBU / Alias</p>
                <p className="font-display text-lg font-semibold text-olive">
                  LUNA.DE.MIEL
                </p>
              </div>
            </div>

            {/* Opción 3: Sobre */}
            <div className="bg-gradient-to-br from-emerald/10 to-olive/10 rounded-lg p-6 border-2 border-gold/20">
              <h3 className="font-display text-2xl font-bold text-olive mb-3">
                Sobre de Regalo
              </h3>
              <p className="font-elegant text-lg text-gray-700">
                Habrá un buzón especial en la fiesta para recibir sobres
              </p>
            </div>
          </div>

          <div className="border-t-2 border-gold/20 pt-8">
            <p className="font-elegant text-lg text-gray-600 italic">
              Recuerda, lo más valioso es compartir este momento con nosotros. 
              ¡Tu compañía es el mejor regalo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

