'use client';

import { useState } from 'react';

export default function GiftList() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const mainData = [
    { label: 'CBU', value: '4530000800014223586133' },
    { label: 'Alias', value: 'BODA.MANU.YAS' },
  ];

  const accountDetails = [
    { label: 'Caja de ahorro en pesos', value: '1422358613' },
    { label: 'Titular', value: 'Yasmin Alejandra Abdonur' },
    { label: 'CUIL', value: '27346895670' },
    { label: 'Banco', value: 'Naranja X' },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-emerald/5 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-olive mb-4">Regalos</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        </div>

        <div className="bg-white rounded-lg shadow-xl border-2 border-gold/30 p-8 md:p-12">
          <div className="mb-8">
            <svg
              className="w-20 h-20 text-gold mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </div>

          <p className="font-elegant text-xl md:text-2xl text-gray-700 leading-relaxed mb-10 text-center">
            El mejor regalo es compartir este día con nosotros, pero si deseas acompañarnos con un
            presente, les dejamos nuestro CBU
          </p>

          <div className="bg-gradient-to-br from-emerald/10 to-olive/10 rounded-lg p-6 md:p-8 border-2 border-gold/20">
            <h3 className="font-display text-2xl font-bold text-olive mb-6 text-center">
              Datos Bancarios
            </h3>

            <div className="space-y-4 max-w-2xl mx-auto">
              {/* CBU y Alias con botones */}
              {mainData.map((item) => (
                <div key={item.label} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-grow">
                      <p className="font-elegant text-sm text-gray-600 mb-1">{item.label}</p>
                      <p className="font-display text-lg font-semibold text-olive break-all">
                        {item.value}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(item.value, item.label)}
                      className="flex-shrink-0 bg-gradient-to-r from-olive to-olive-dark text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      {copiedField === item.label ? (
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
              ))}

              {/* Detalles de cuenta en una sola box */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="space-y-3">
                  {accountDetails.map((item) => (
                    <div key={item.label}>
                      <p className="font-elegant text-sm text-gray-600">{item.label}</p>
                      <p className="font-display text-lg font-semibold text-olive">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
