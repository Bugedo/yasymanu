'use client';

import Image from 'next/image';

export default function FixedBackground() {
  return (
    <div className="fixed inset-0 bg-[#5f6154] overflow-hidden">
      {/* Patrón de fondo */}
      <div className="pattern-bg"></div>

      {/* Hojitas decorativas */}
      {/* Esquina superior izquierda */}
      <div className="absolute -top-10 -left-10 w-56 h-56 md:w-80 md:h-80 opacity-40 animate-leaf-float">
        <Image
          src="/images/hero/hojitas.png"
          alt=""
          fill
          className="object-contain"
          style={{ transform: 'rotate(-90deg)' }}
        />
      </div>

      {/* Esquina superior derecha */}
      <div className="absolute -top-8 -right-8 w-52 h-52 md:w-72 md:h-72 opacity-40 animate-leaf-sway">
        <Image
          src="/images/hero/hojitas.png"
          alt=""
          fill
          className="object-contain"
          style={{ transform: 'rotate(55deg) scaleX(-1)' }}
        />
      </div>

      {/* Esquina inferior izquierda */}
      <div className="absolute -bottom-12 -left-12 w-60 h-60 md:w-88 md:h-88 opacity-40 animate-leaf-float-reverse">
        <Image
          src="/images/hero/hojitas.png"
          alt=""
          fill
          className="object-contain"
          style={{ transform: 'rotate(250deg)' }}
        />
      </div>

      {/* Esquina inferior derecha */}
      <div className="absolute -bottom-10 -right-10 w-56 h-56 md:w-76 md:h-76 opacity-40 animate-leaf-sway-reverse">
        <Image
          src="/images/hero/hojitas.png"
          alt=""
          fill
          className="object-contain"
          style={{ transform: 'rotate(-135deg) scaleX(-1)' }}
        />
      </div>
    </div>
  );
}
