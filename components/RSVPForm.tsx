'use client';

import { useState } from 'react';

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    dietaryRestrictions: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form data:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-emerald/10 to-olive/10 rounded-lg shadow-xl border-2 border-gold/30 p-12">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald to-olive rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-3xl font-bold text-olive mb-4">
              ¡Confirmación Recibida!
            </h3>
            <p className="font-elegant text-xl text-gray-700">
              Gracias por confirmar tu asistencia. ¡Nos vemos en la boda!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-olive mb-4">
            Confirmar Asistencia
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="font-elegant text-xl text-gray-600 italic">
            Por favor, confírmanos tu presencia antes del 1 de Mayo
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-emerald/5 to-olive/5 rounded-lg shadow-xl border-2 border-gold/20 p-8">
          <div className="space-y-6">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block font-display text-lg font-semibold text-olive mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-display text-lg font-semibold text-olive mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700"
                placeholder="tu@email.com"
              />
            </div>

            {/* Asistencia */}
            <div>
              <label htmlFor="attending" className="block font-display text-lg font-semibold text-olive mb-2">
                ¿Asistirás? *
              </label>
              <select
                id="attending"
                name="attending"
                required
                value={formData.attending}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700"
              >
                <option value="yes">Sí, asistiré con mucho gusto</option>
                <option value="no">Lamentablemente no podré asistir</option>
              </select>
            </div>

            {/* Número de invitados */}
            {formData.attending === 'yes' && (
              <div>
                <label htmlFor="guests" className="block font-display text-lg font-semibold text-olive mb-2">
                  Número de Invitados *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'persona' : 'personas'}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Restricciones alimentarias */}
            {formData.attending === 'yes' && (
              <div>
                <label htmlFor="dietaryRestrictions" className="block font-display text-lg font-semibold text-olive mb-2">
                  Restricciones Alimentarias
                </label>
                <input
                  type="text"
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700"
                  placeholder="Vegetariano, vegano, alergias, etc."
                />
              </div>
            )}

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block font-display text-lg font-semibold text-olive mb-2">
                Mensaje para los Novios
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700"
                placeholder="Déjanos un mensaje..."
              />
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald to-olive text-white font-display text-xl font-semibold py-4 rounded-lg hover:from-emerald-dark hover:to-olive-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Confirmar Asistencia
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

