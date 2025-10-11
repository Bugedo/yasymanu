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
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showPaymentData, setShowPaymentData] = useState(false);
  const [isClosingPayment, setIsClosingPayment] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleTogglePaymentData = () => {
    if (showPaymentData) {
      setIsClosingPayment(true);
      setTimeout(() => {
        setShowPaymentData(false);
        setIsClosingPayment(false);
      }, 600);
    } else {
      setShowPaymentData(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form data:', formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
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
                  d="M5 13l4 4L19 7"
                />
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
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Título de confirmar asistencia */}
        <div className="text-center mb-12">
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#FAF8F3' }}
          >
            Confirmar Asistencia
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        </div>

        {/* Formulario de confirmación */}
        <form
          onSubmit={handleSubmit}
          className="mb-12 bg-white/10 backdrop-blur-sm rounded-lg shadow-xl border-2 border-gold/30 p-8"
        >
          <div className="space-y-6">
            {/* Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block font-display text-lg font-semibold mb-2"
                style={{ color: '#FAF8F3' }}
              >
                Nombre Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-display text-lg font-semibold mb-2"
                style={{ color: '#FAF8F3' }}
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
                placeholder="tu@email.com"
              />
            </div>

            {/* Asistencia */}
            <div>
              <label
                htmlFor="attending"
                className="block font-display text-lg font-semibold mb-2"
                style={{ color: '#FAF8F3' }}
              >
                ¿Asistirás? *
              </label>
              <select
                id="attending"
                name="attending"
                required
                value={formData.attending}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
              >
                <option value="yes">Sí, asistiré con mucho gusto</option>
                <option value="no">Lamentablemente no podré asistir</option>
              </select>
            </div>

            {/* Número de invitados */}
            {formData.attending === 'yes' && (
              <div>
                <label
                  htmlFor="guests"
                  className="block font-display text-lg font-semibold mb-2"
                  style={{ color: '#FAF8F3' }}
                >
                  Número de Invitados *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
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
                <label
                  htmlFor="dietaryRestrictions"
                  className="block font-display text-lg font-semibold mb-2"
                  style={{ color: '#FAF8F3' }}
                >
                  Restricciones Alimentarias
                </label>
                <input
                  type="text"
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
                  placeholder="Vegetariano, vegano, alergias, etc."
                />
              </div>
            )}

            {/* Mensaje */}
            <div>
              <label
                htmlFor="message"
                className="block font-display text-lg font-semibold mb-2"
                style={{ color: '#FAF8F3' }}
              >
                Mensaje para los Novios
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
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

        {/* Sección de pago de tarjetas */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-xl border-2 border-gold/30 p-8">
          <div className="mb-6 text-center">
            <p className="font-elegant text-3xl md:text-4xl mb-3" style={{ color: '#FAF8F3' }}>
              Precio Tarjeta
            </p>
            <p className="font-display text-3xl md:text-4xl font-bold" style={{ color: '#FAF8F3' }}>
              $XX.XXX
            </p>
          </div>

          {/* Botón desplegable para datos bancarios */}
          <button
            onClick={handleTogglePaymentData}
            className="w-full bg-gradient-to-r from-olive to-olive-dark text-white font-elegant py-3 px-4 rounded-lg hover:shadow-lg transition-all text-center mb-6"
          >
            VER DATOS BANCARIOS
          </button>

          {/* Contenido desplegable */}
          {showPaymentData && (
            <div className={`mb-6 ${isClosingPayment ? 'animate-slideUp' : 'animate-slideDown'}`}>
              <div className="bg-white/90 rounded-lg p-6 space-y-3">
                {/* CBU con botón */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-grow">
                      <p className="font-elegant text-sm text-gray-600 mb-1">CBU</p>
                      <p className="font-display text-base font-semibold text-olive break-all">
                        4530000800014223586133
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard('4530000800014223586133', 'payment-cbu')}
                      className="flex-shrink-0 bg-gradient-to-r from-olive to-olive-dark text-white px-3 py-2 rounded-lg hover:shadow-lg transition-all flex items-center gap-1"
                    >
                      {copiedField === 'payment-cbu' ? (
                        <>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="hidden sm:inline text-sm">Copiado</span>
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="hidden sm:inline text-sm">Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Alias con botón */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-grow">
                      <p className="font-elegant text-sm text-gray-600 mb-1">Alias</p>
                      <p className="font-display text-base font-semibold text-olive">
                        BODA.MANU.YAS
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard('BODA.MANU.YAS', 'payment-alias')}
                      className="flex-shrink-0 bg-gradient-to-r from-olive to-olive-dark text-white px-3 py-2 rounded-lg hover:shadow-lg transition-all flex items-center gap-1"
                    >
                      {copiedField === 'payment-alias' ? (
                        <>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="hidden sm:inline text-sm">Copiado</span>
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="hidden sm:inline text-sm">Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-elegant text-sm text-gray-600">Caja de ahorro en pesos</p>
                  <p className="font-display text-base font-semibold text-olive">1422358613</p>
                </div>
                <div>
                  <p className="font-elegant text-sm text-gray-600">Titular</p>
                  <p className="font-display text-base font-semibold text-olive">
                    Yasmin Alejandra Abdonur
                  </p>
                </div>
                <div>
                  <p className="font-elegant text-sm text-gray-600">CUIL</p>
                  <p className="font-display text-base font-semibold text-olive">27346895670</p>
                </div>
                <div>
                  <p className="font-elegant text-sm text-gray-600">Banco</p>
                  <p className="font-display text-base font-semibold text-olive">Naranja X</p>
                </div>
              </div>
            </div>
          )}

          <p className="font-elegant text-lg md:text-xl text-center" style={{ color: '#FAF8F3' }}>
            Una vez realizado el pago, haz clic para confirmar por{' '}
            <a
              href="https://wa.me/5493513224810?text=Hola,%20quiero%20confirmar%20que%20ya%20pague%20las%20tarjetas%20para%20la%20fiesta."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light underline font-semibold transition-colors"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
