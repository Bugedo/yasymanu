export default function OurStory() {
  const milestones = [
    {
      date: 'Marzo 2018',
      title: 'Nos Conocimos',
      description: 'Un encuentro casual en una cafetería que cambió nuestras vidas para siempre.',
      icon: '💫',
    },
    {
      date: 'Julio 2018',
      title: 'Primer Beso',
      description: 'Bajo las estrellas en la playa, sellamos nuestro amor con el primer beso.',
      icon: '💕',
    },
    {
      date: 'Enero 2020',
      title: 'Nos Mudamos Juntos',
      description: 'Comenzamos a construir nuestro hogar y nuestra vida en común.',
      icon: '🏡',
    },
    {
      date: 'Diciembre 2023',
      title: 'La Propuesta',
      description:
        'En el mismo lugar donde nos conocimos, Manu se arrodilló y preguntó "¿Te casarías conmigo?"',
      icon: '💍',
    },
    {
      date: 'Junio 2025',
      title: 'Nuestra Boda',
      description:
        '¡El día que tanto esperamos! Celebramos nuestro amor rodeados de familia y amigos.',
      icon: '💒',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-emerald/5 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-olive mb-4">
            Nuestra Historia
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="font-elegant text-xl text-gray-600 italic">
            El camino que nos llevó hasta aquí
          </p>
        </div>

        <div className="relative">
          {/* Línea de tiempo vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald via-gold to-emerald hidden md:block"></div>

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Contenido */}
              <div
                className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gold/20">
                  <p className="font-display text-lg font-semibold text-gold mb-2">
                    {milestone.date}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-olive mb-3">
                    {milestone.title}
                  </h3>
                  <p className="font-elegant text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Ícono central */}
              <div className="my-4 md:my-0 w-16 h-16 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-gradient-to-br from-emerald to-olive rounded-full flex items-center justify-center text-3xl shadow-lg border-4 border-white z-10">
                {milestone.icon}
              </div>

              {/* Espacio para mantener el diseño */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
