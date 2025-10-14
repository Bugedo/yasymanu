'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function RSVPForm() {
  const [precioAdulto, setPrecioAdulto] = useState(134500); // Precio por defecto
  const [formData, setFormData] = useState({
    name: '',
    attending: 'si',
    withCompanion: 'no',
    totalGuests: '',
    adultos18: '',
    withMinors: 'no',
    menores10a17: '',
    menores2a10: '',
    menoresDe2: '',
    dietaryRestrictions: [] as string[],
    otherRestriction: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showPaymentData, setShowPaymentData] = useState(false);
  const [isClosingPayment, setIsClosingPayment] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Obtener el precio desde Google Sheets al cargar el componente
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('/api/get-price');
        const data = await response.json();
        if (data.price) {
          setPrecioAdulto(data.price);
        }
      } catch (error) {
        console.error('Error al obtener el precio:', error);
        // Si hay error, mantener el precio por defecto
      }
    };

    fetchPrice();
  }, []);

  // Función para formatear el precio
  const formatPrice = (price: number) => {
    return price.toLocaleString('es-AR');
  };

  const copyToClipboard = (text: string, field: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
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

  // Función para calcular el costo total de las tarjetas
  const calculateTotalCost = () => {
    // Si no asiste, el costo es 0
    if (formData.attending === 'no') {
      return 0;
    }

    // Mayores de 18 años + Menores de 10-17 años: precio completo
    const adultos = parseInt(formData.adultos18) || 0;
    const menores10a17 = parseInt(formData.menores10a17) || 0;
    const totalPrecioCompleto = adultos + menores10a17;

    // Menores de 2-10 años: 50% del precio
    const menores2a10 = parseInt(formData.menores2a10) || 0;
    const precioMenor2a10 = precioAdulto * 0.5;

    // Menores de 2 años: gratis (no cuenta en el cálculo)

    // Calcular costo total
    const cost = totalPrecioCompleto * precioAdulto + menores2a10 * precioMenor2a10;
    return cost;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Calcular el costo total
      const cost = calculateTotalCost();
      setTotalCost(cost);

      // Preparar datos para guardar en Google Sheets
      const dataToSave = {
        nombre: formData.name,
        asistencia: formData.attending,
        acompaniado: formData.withCompanion,
        total_invitados: parseInt(formData.totalGuests) || 1,
        adultos_18_mas: parseInt(formData.adultos18) || 0,
        menores_10_17: parseInt(formData.menores10a17) || 0,
        menores_2_10: parseInt(formData.menores2a10) || 0,
        menores_de_2: parseInt(formData.menoresDe2) || 0,
        restricciones_alimentarias: formData.dietaryRestrictions.join(', '),
        otra_restriccion: formData.otherRestriction,
        costo_total: cost,
        fecha: new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' }),
      };

      // Enviar datos a Google Sheets vía API
      const response = await fetch('/api/submit-rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSave),
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      console.log('Datos guardados exitosamente:', dataToSave);
      setSubmitted(true);
    } catch (err) {
      console.error('Error:', err);
      setError('Hubo un error al guardar tu confirmación. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (value: string) => {
    const restrictions = formData.dietaryRestrictions;
    if (restrictions.includes(value)) {
      setFormData({
        ...formData,
        dietaryRestrictions: restrictions.filter((r) => r !== value),
      });
    } else {
      setFormData({
        ...formData,
        dietaryRestrictions: [...restrictions, value],
      });
    }
  };

  return (
    <>
      {submitted ? (
        // Mensaje de confirmación
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="mb-12 bg-white/10 backdrop-blur-sm rounded-lg shadow-xl border-2 border-gold/30 p-8">
              <div className="text-center">
                {/* Imagen con marco estilo video */}
                <div className="mb-8 flex justify-center">
                  <div className="w-full max-w-sm md:max-w-md">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-gold/40 p-3 md:p-4">
                      <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src="/images/general/fotograciasblancos.jpg"
                          alt="Gracias por confirmar"
                          width={800}
                          height={600}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-display text-3xl font-bold mb-2" style={{ color: '#FAF8F3' }}>
                  ¡Gracias por confirmar!
                </h3>
                <p className="font-elegant text-xl mb-6" style={{ color: '#FAF8F3' }}>
                  Te esperamos el 7 de noviembre
                </p>

                {totalCost > 0 && (
                  <div className="mt-6 p-6 bg-white rounded-lg shadow-md border-2 border-gold/20">
                    <h4 className="font-display text-2xl font-bold text-olive mb-2">
                      Total a Pagar
                    </h4>
                    <p className="font-display text-4xl font-bold text-olive mb-4">
                      ${totalCost.toLocaleString('es-AR')}
                    </p>
                    <p className="font-elegant text-base text-gray-600">
                      Más abajo encontrarás los datos bancarios para realizar la transferencia.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Formulario
        <>
          <section className="relative z-10 py-20 px-4">
            <div className="max-w-2xl mx-auto">
              {/* Formulario de confirmación */}
              <form
                onSubmit={handleSubmit}
                className="mb-12 bg-white/10 backdrop-blur-sm rounded-lg shadow-xl border-2 border-gold/30 p-8"
              >
                {/* Título de confirmar asistencia */}
                <div className="text-center mb-8">
                  <h2
                    className="font-display text-4xl md:text-5xl font-bold mb-4"
                    style={{ color: '#FAF8F3' }}
                  >
                    Confirmar Asistencia
                  </h2>
                  <div className="w-24 h-1 bg-gold mx-auto"></div>
                </div>

                {/* Información de precio dentro del formulario */}
                <div className="text-center mb-8 pb-6 border-b border-gold/30">
                  <h3
                    className="font-display text-2xl md:text-3xl font-bold mb-2"
                    style={{ color: '#FAF8F3' }}
                  >
                    VALOR TARJETA
                  </h3>
                  <p className="font-elegant text-lg md:text-xl mb-3" style={{ color: '#FAF8F3' }}>
                    Precio Octubre 2025
                  </p>
                  <p
                    className="font-display text-3xl md:text-4xl font-bold mb-3"
                    style={{ color: '#FAF8F3' }}
                  >
                    ${formatPrice(precioAdulto)}
                  </p>
                  <div className="font-elegant text-sm mt-3 space-y-1" style={{ color: '#FAF8F3' }}>
                    <p>Menores de 2 a 10 años: 50%</p>
                    <p>Menores de 2 años: Sin Costo</p>
                    <p className="mt-3 pt-3 border-t border-gold/30">
                      Si venis después de cena, contactate por{' '}
                      <a
                        href="https://wa.me/5493513224810?text=Hola%20Yas%2C%20voy%20despu%C3%A9s%20de%20Cena."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:text-gold/80 underline transition-colors"
                      >
                        whatsapp
                      </a>
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Nombre Apellido */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-display text-lg font-semibold mb-2"
                      style={{ color: '#FAF8F3' }}
                    >
                      Nombre Apellido *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  {/* Contamos con tu presencia */}
                  <div>
                    <label
                      htmlFor="attending"
                      className="block font-display text-lg font-semibold mb-2"
                      style={{ color: '#FAF8F3' }}
                    >
                      Contamos con tu presencia *
                    </label>
                    <select
                      id="attending"
                      name="attending"
                      required
                      value={formData.attending}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
                    >
                      <option value="si">Obvio si</option>
                      <option value="no">Lamentablemente no puedo</option>
                      <option value="despues-cena">Voy después de cena</option>
                    </select>
                  </div>

                  {/* Mostrar más preguntas solo si confirma asistencia */}
                  {(formData.attending === 'si' || formData.attending === 'despues-cena') && (
                    <>
                      {/* ¿Vas a venir con alguien? */}
                      <div>
                        <label
                          htmlFor="withCompanion"
                          className="block font-display text-lg font-semibold mb-2"
                          style={{ color: '#FAF8F3' }}
                        >
                          ¿Vas a venir con alguien? *
                        </label>
                        <select
                          id="withCompanion"
                          name="withCompanion"
                          required
                          value={formData.withCompanion}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
                        >
                          <option value="no">Voy sol@</option>
                          <option value="si">Sí, voy acompañad@</option>
                        </select>
                      </div>

                      {/* ¿Cuántos serían? */}
                      {formData.withCompanion === 'si' && (
                        <div>
                          <label
                            htmlFor="totalGuests"
                            className="block font-display text-lg font-semibold mb-2"
                            style={{ color: '#FAF8F3' }}
                          >
                            ¿Cuántos serían en total? *
                          </label>
                          <input
                            type="number"
                            id="totalGuests"
                            name="totalGuests"
                            min="2"
                            max="15"
                            required
                            value={formData.totalGuests}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
                            placeholder="Número total de personas (incluyéndote)"
                          />
                        </div>
                      )}

                      {/* Mayores de 18 años */}
                      {formData.withCompanion === 'si' && (
                        <div>
                          <label
                            htmlFor="adultos18"
                            className="block font-display text-lg font-semibold mb-2"
                            style={{ color: '#FAF8F3' }}
                          >
                            Mayores de 18 años *
                          </label>
                          <input
                            type="number"
                            id="adultos18"
                            name="adultos18"
                            min="1"
                            max="15"
                            required
                            value={formData.adultos18}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
                            placeholder="Cantidad de mayores de 18"
                          />
                        </div>
                      )}

                      {/* ¿Venís con menores? */}
                      <div>
                        <label
                          htmlFor="withMinors"
                          className="block font-display text-lg font-semibold mb-2"
                          style={{ color: '#FAF8F3' }}
                        >
                          ¿Venís con menores? *
                        </label>
                        <select
                          id="withMinors"
                          name="withMinors"
                          required
                          value={formData.withMinors}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
                        >
                          <option value="no">No</option>
                          <option value="si">Sí</option>
                        </select>
                      </div>

                      {/* Campos de menores desglosados */}
                      {formData.withMinors === 'si' && (
                        <>
                          <div>
                            <label
                              htmlFor="menores10a17"
                              className="block font-display text-lg font-semibold mb-2"
                              style={{ color: '#FAF8F3' }}
                            >
                              Menores de 10 a 17 años (100% - ${formatPrice(precioAdulto)})
                            </label>
                            <input
                              type="number"
                              id="menores10a17"
                              name="menores10a17"
                              min="0"
                              max="10"
                              value={formData.menores10a17}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
                              placeholder="Cantidad de menores de 10-17 años"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="menores2a10"
                              className="block font-display text-lg font-semibold mb-2"
                              style={{ color: '#FAF8F3' }}
                            >
                              Menores de 2 a 10 años (50% - ${formatPrice(precioAdulto * 0.5)})
                            </label>
                            <input
                              type="number"
                              id="menores2a10"
                              name="menores2a10"
                              min="0"
                              max="10"
                              value={formData.menores2a10}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
                              placeholder="Cantidad de menores de 2-10 años"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="menoresDe2"
                              className="block font-display text-lg font-semibold mb-2"
                              style={{ color: '#FAF8F3' }}
                            >
                              Menores de 2 años (Sin Costo)
                            </label>
                            <input
                              type="number"
                              id="menoresDe2"
                              name="menoresDe2"
                              min="0"
                              max="10"
                              value={formData.menoresDe2}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
                              placeholder="Cantidad de menores de 2 años"
                            />
                          </div>
                        </>
                      )}

                      {/* Restricciones alimentarias */}
                      <div>
                        <label
                          className="block font-display text-lg font-semibold mb-3"
                          style={{ color: '#FAF8F3' }}
                        >
                          ¿Alguna restricción alimentaria? Avísanos para que también puedas comer
                          rico
                        </label>
                        <div className="space-y-2">
                          {[
                            { value: 'celiquia', label: 'Celiaquía' },
                            { value: 'diabetes', label: 'Diabetes' },
                            { value: 'vegano', label: 'Vegan@' },
                            { value: 'vegetariano', label: 'Vegetarian@' },
                            { value: 'otros', label: 'Otros' },
                          ].map((restriction) => (
                            <label
                              key={restriction.value}
                              className="flex items-center space-x-3 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={formData.dietaryRestrictions.includes(restriction.value)}
                                onChange={() => handleCheckboxChange(restriction.value)}
                                className="w-5 h-5 rounded-full border-2 border-gold/50 appearance-none cursor-pointer checked:bg-emerald checked:border-emerald transition-colors"
                              />
                              <span className="font-elegant text-base" style={{ color: '#FAF8F3' }}>
                                {restriction.label}
                              </span>
                            </label>
                          ))}
                        </div>

                        {/* Campo para especificar otros */}
                        {formData.dietaryRestrictions.includes('otros') && (
                          <input
                            type="text"
                            name="otherRestriction"
                            value={formData.otherRestriction}
                            onChange={handleChange}
                            className="mt-3 w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-emerald font-elegant text-gray-700 bg-white"
                            placeholder="Especifica la restricción alimentaria"
                          />
                        )}
                      </div>
                    </>
                  )}

                  {/* Mensaje de error */}
                  {error && (
                    <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-lg">
                      <p className="font-elegant">{error}</p>
                    </div>
                  )}

                  {/* Botón de envío */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-olive to-olive-dark text-white font-display text-xl font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-3 ${
                      isSubmitting
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:shadow-xl transform hover:-translate-y-1'
                    }`}
                  >
                    {isSubmitting && (
                      <svg
                        className="animate-spin h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
                    {isSubmitting ? 'Enviando...' : 'Enviar Confirmación'}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </>
      )}

      {/* Sección de pago de tarjetas - Siempre visible */}
      <section className="relative z-20 text-center py-8 border-y-2 border-gold/20 payment-gradient">
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          {/* Botón desplegable para datos bancarios */}
          <button
            onClick={handleTogglePaymentData}
            className="w-full bg-gradient-to-r from-olive to-olive-dark text-white font-elegant py-3 px-4 rounded-lg hover:shadow-lg transition-all text-center mb-6"
          >
            DATOS BANCARIOS
          </button>

          {/* Contenido desplegable */}
          {showPaymentData && (
            <div className={`mt-6 ${isClosingPayment ? 'animate-slideUp' : 'animate-slideDown'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 border-2 border-gold/30">
                <div className="space-y-4">
                  {/* CBU con botón */}
                  <div className="bg-white/90 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-grow">
                        <p className="font-elegant text-sm text-gray-600 mb-1">CBU</p>
                        <p className="font-display text-lg font-semibold text-olive break-all">
                          4530000800014223586133
                        </p>
                      </div>
                      <button
                        onClick={() => copyToClipboard('4530000800014223586133', 'payment-cbu')}
                        className="flex-shrink-0 bg-gradient-to-r from-olive to-olive-dark text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
                      >
                        {copiedField === 'payment-cbu' ? (
                          <>
                            <svg
                              className="w-5 h-5"
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
                            <span className="hidden sm:inline">Copiado</span>
                          </>
                        ) : (
                          <>
                            <svg
                              className="w-5 h-5"
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
                            <span className="hidden sm:inline">Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Alias con botón */}
                  <div className="bg-white/90 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-grow">
                        <p className="font-elegant text-sm text-gray-600 mb-1">Alias</p>
                        <p className="font-display text-lg font-semibold text-olive">
                          BODA.MANU.YAS
                        </p>
                      </div>
                      <button
                        onClick={() => copyToClipboard('BODA.MANU.YAS', 'payment-alias')}
                        className="flex-shrink-0 bg-gradient-to-r from-olive to-olive-dark text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
                      >
                        {copiedField === 'payment-alias' ? (
                          <>
                            <svg
                              className="w-5 h-5"
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
                            <span className="hidden sm:inline">Copiado</span>
                          </>
                        ) : (
                          <>
                            <svg
                              className="w-5 h-5"
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
                            <span className="hidden sm:inline">Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Detalles de cuenta en una sola box */}
                  <div className="bg-white/90 rounded-lg p-4 shadow-sm">
                    <div className="space-y-3">
                      <div>
                        <p className="font-elegant text-sm text-gray-600">
                          Caja de ahorro en pesos
                        </p>
                        <p className="font-display text-lg font-semibold text-olive">1422358613</p>
                      </div>
                      <div>
                        <p className="font-elegant text-sm text-gray-600">Titular</p>
                        <p className="font-display text-lg font-semibold text-olive">
                          Yasmin Alejandra Abdonur
                        </p>
                      </div>
                      <div>
                        <p className="font-elegant text-sm text-gray-600">CUIL</p>
                        <p className="font-display text-lg font-semibold text-olive">27346895670</p>
                      </div>
                      <div>
                        <p className="font-elegant text-sm text-gray-600">Banco</p>
                        <p className="font-display text-lg font-semibold text-olive">Naranja X</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <p className="font-elegant text-lg md:text-xl text-center text-gray-700 mt-6">
            Una vez realizado el pago, haz clic para confirmar por{' '}
            <a
              href="https://wa.me/5493513224810?text=Hola,%20quiero%20confirmar%20que%20ya%20pague%20las%20tarjetas%20para%20la%20fiesta."
              target="_blank"
              rel="noopener noreferrer"
              className="text-olive hover:text-olive-dark underline font-semibold transition-colors"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
