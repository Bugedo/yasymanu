'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // 7 de Noviembre 2025, 20:30 hora de Buenos Aires (UTC-3)
    const weddingDate = new Date('2025-11-07T20:30:00-03:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center">
      <div className="text-center px-4 max-w-4xl mx-auto">
        {/* Ornamento superior */}
        <div className="mb-8 flex justify-center">
          <svg width="100" height="20" viewBox="0 0 100 20" className="text-gold fill-current">
            <path d="M50 0 L55 10 L50 20 L45 10 Z M30 5 L35 10 L30 15 L25 10 Z M70 5 L75 10 L70 15 L65 10 Z" />
          </svg>
        </div>

        {/* Nombres de los novios */}
        <h1
          className="font-display text-6xl md:text-8xl font-bold mb-4 tracking-wide"
          style={{ color: '#FAF8F3' }}
        >
          Yasmin & Manuel
        </h1>

        <div className="my-8">
          <div className="w-16 h-px bg-gold mx-auto"></div>
        </div>

        {/* Cuenta regresiva simple */}
        <div className="flex justify-center gap-4 md:gap-8 mb-8">
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl" style={{ color: '#FAF8F3' }}>
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="font-elegant text-sm md:text-base mt-1" style={{ color: '#FAF8F3' }}>
              Días
            </div>
          </div>
          <div
            className="font-display text-4xl md:text-5xl self-center"
            style={{ color: '#FAF8F3' }}
          >
            :
          </div>
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl" style={{ color: '#FAF8F3' }}>
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="font-elegant text-sm md:text-base mt-1" style={{ color: '#FAF8F3' }}>
              Horas
            </div>
          </div>
          <div
            className="font-display text-4xl md:text-5xl self-center"
            style={{ color: '#FAF8F3' }}
          >
            :
          </div>
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl" style={{ color: '#FAF8F3' }}>
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="font-elegant text-sm md:text-base mt-1" style={{ color: '#FAF8F3' }}>
              Minutos
            </div>
          </div>
          <div
            className="font-display text-4xl md:text-5xl self-center"
            style={{ color: '#FAF8F3' }}
          >
            :
          </div>
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl" style={{ color: '#FAF8F3' }}>
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="font-elegant text-sm md:text-base mt-1" style={{ color: '#FAF8F3' }}>
              Segundos
            </div>
          </div>
        </div>

        {/* Mensaje */}
        <p
          className="font-elegant text-xl md:text-2xl italic max-w-2xl mx-auto"
          style={{ color: '#FAF8F3' }}
        >
          Nuestro éxito es el amor que nos rodea y queremos que formes parte de él en nuestra boda
        </p>

        {/* Ornamento inferior */}
        <div className="mt-12 flex justify-center">
          <svg width="100" height="20" viewBox="0 0 100 20" className="text-gold fill-current">
            <path d="M50 0 L55 10 L50 20 L45 10 Z M30 5 L35 10 L30 15 L25 10 Z M70 5 L75 10 L70 15 L65 10 Z" />
          </svg>
        </div>

        {/* Flecha de scroll */}
        <div className="mt-8 flex justify-center">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
