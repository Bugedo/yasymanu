# Organización de Imágenes

Esta carpeta contiene todas las imágenes utilizadas en el sitio web de la boda.

## Estructura de carpetas:

- **hero/** - Imágenes para la sección principal/banner (Hero)
- **gallery/** - Fotos para la galería de imágenes
- **events/** - Imágenes relacionadas con los eventos (ceremonia, fiesta)
- **gifts/** - Imágenes de regalos o lista de regalos
- **general/** - Otras imágenes generales del sitio

## Uso en el código:

Para referenciar las imágenes en los componentes, usa rutas relativas desde `/images/`:

```jsx
<img src="/images/hero/foto-principal.jpg" alt="Descripción" />
```

o con Next.js Image:

```jsx
import Image from 'next/image';

<Image src="/images/gallery/foto1.jpg" alt="Descripción" width={800} height={600} />;
```
