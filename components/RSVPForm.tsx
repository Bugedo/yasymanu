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

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-olive mb-4">
            Confirmar Asistencia
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-emerald/5 to-olive/5 rounded-lg shadow-xl border-2 border-gold/20 p-8"
        >
          <div className="space-y-6">
            {/* Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block font-display text-lg font-semibold text-olive mb-2"
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
                className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-display text-lg font-semibold text-olive mb-2"
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
                className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700"
                placeholder="tu@email.com"
              />
            </div>

            {/* Asistencia */}
            <div>
              <label
                htmlFor="attending"
                className="block font-display text-lg font-semibold text-olive mb-2"
              >
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
                <label
                  htmlFor="guests"
                  className="block font-display text-lg font-semibold text-olive mb-2"
                >
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
                <label
                  htmlFor="dietaryRestrictions"
                  className="block font-display text-lg font-semibold text-olive mb-2"
                >
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
              <label
                htmlFor="message"
                className="block font-display text-lg font-semibold text-olive mb-2"
              >
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

        {/* Sección de pago de tarjetas */}
        <div className="mt-8 bg-gradient-to-br from-gold/10 to-olive/10 rounded-lg shadow-xl border-2 border-gold/30 p-8">
          <h3 className="font-display text-2xl font-bold text-olive mb-6 text-center">
            Pago de Tarjetas
          </h3>

          <div className="bg-white rounded-lg p-6 mb-6">
            <p className="font-elegant text-lg text-gray-700 mb-2 text-center">
              Monto por tarjeta:
            </p>
            <p className="font-display text-3xl font-bold text-olive text-center mb-6">$XX.XXX</p>

            <div className="border-t border-gray-200 pt-6 space-y-3">
              <h4 className="font-display text-lg font-bold text-olive mb-4 text-center">
                Datos Bancarios
              </h4>

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
                    <p className="font-display text-base font-semibold text-olive">BODA.MANU.YAS</p>
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

          <a
            href="https://wa.me/5493513224810?text=Hola,%20quiero%20confirmar%20que%20ya%20pague%20las%20tarjetas%20para%20la%20fiesta."
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-emerald to-olive text-white font-display text-xl font-semibold py-4 rounded-lg hover:from-emerald-dark hover:to-olive-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Confirmar Pago
            </div>
          </a>

          <p className="font-elegant text-sm text-gray-600 text-center mt-4">
            Una vez realizado el pago, haz clic para confirmar por WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
