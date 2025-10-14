'use client';

import { useState, useEffect } from 'react';

// 7 de Noviembre 2025, 20:00 hora de Buenos Aires (UTC-3)
const weddingDate = new Date('2025-11-07T20:00:00-03:00').getTime();

const calculateTimeLeft = () => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-olive mb-4">
          Cuenta Regresiva
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald/10 to-olive/10 rounded-lg p-6 md:p-8 border-2 border-gold/20 shadow-lg">
            <div className="font-display text-5xl md:text-6xl font-bold text-olive mb-2">
              {timeLeft.days}
            </div>
            <div className="font-elegant text-lg md:text-xl text-olive-light uppercase tracking-wider">
              Días
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald/10 to-olive/10 rounded-lg p-6 md:p-8 border-2 border-gold/20 shadow-lg">
            <div className="font-display text-5xl md:text-6xl font-bold text-olive mb-2">
              {timeLeft.hours}
            </div>
            <div className="font-elegant text-lg md:text-xl text-olive-light uppercase tracking-wider">
              Horas
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald/10 to-olive/10 rounded-lg p-6 md:p-8 border-2 border-gold/20 shadow-lg">
            <div className="font-display text-5xl md:text-6xl font-bold text-olive mb-2">
              {timeLeft.minutes}
            </div>
            <div className="font-elegant text-lg md:text-xl text-olive-light uppercase tracking-wider">
              Minutos
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald/10 to-olive/10 rounded-lg p-6 md:p-8 border-2 border-gold/20 shadow-lg">
            <div className="font-display text-5xl md:text-6xl font-bold text-olive mb-2">
              {timeLeft.seconds}
            </div>
            <div className="font-elegant text-lg md:text-xl text-olive-light uppercase tracking-wider">
              Segundos
            </div>
          </div>
        </div>

        <p className="font-elegant text-xl md:text-2xl text-gray-600 italic mt-12">
          ¡No puedes faltar a este momento tan especial!
        </p>
      </div>
    </section>
  );
}
