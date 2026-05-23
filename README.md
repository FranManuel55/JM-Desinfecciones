# JM Desinfecciones - Landing Page

Landing page de alta conversión para JM Desinfecciones, empresa de control de plagas en Mendoza, Argentina.

## Stack Tecnológico

- **Framework:** Astro 6 con TypeScript strict
- **Estilos:** Tailwind CSS v3
- **Componentes interactivos:** React (solo donde se requiere interactividad real)
- **Fuentes:** Inter Variable (Google Fonts)
- **Icons:** Inline SVGs (Lucide-style)
- **SEO:** Sitemap automático, JSON-LD LocalBusiness + FAQPage

## 🚀 Inicio Rápido

```bash
npm install
npm run dev
```

Abre http://localhost:4321 en tu navegador.

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── sections/          # Secciones de la landing
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Reviews.astro
│   │   ├── Process.astro
│   │   ├── FAQ.astro
│   │   ├── Contact.astro
│   │   └── CTAFinal.astro
│   ├── layout/            # Componentes de layout persistentes
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── FloatingWhatsApp.astro
│   │   └── BackToTop.astro
│   ├── ui/                # Componentes UI atómicos
│   │   ├── Button.astro
│   │   └── Container.astro
│   └── interactive/      # Componentes React hidratados
│       └── FAQAccordion.tsx
├── content/              # Content Collections (tipado Zod)
│   ├── reviews/          # Reseñas de Google
│   ├── faq/               # Preguntas frecuentes
│   └── services/         # Servicios ofrecidos
├── data/
│   └── siteConfig.ts      # Datos de contacto centralizados
├── layouts/
│   └── Layout.astro       # Layout principal con SEO
├── pages/
│   └── index.astro        # Página principal
└── styles/
    └── globals.css        # Estilos globales + Tailwind
```

## 🎨 Personalización

### Datos de Contacto y WhatsApp

Editar `src/data/siteConfig.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'JM Desinfecciones',
  phone: '+54 2617057134',
  whatsapp: '542617057134',  // Número sin + ni espacios
  email: 'contacto@@jmdesinfecciones.com.ar',
  address: 'Gdor. González 586, Ciudad, Mendoza, Argentina',
  // ... más campos
};
```

### Colores de Marca

Los colores están definidos en Tailwind y CSS:

- **Primario:** `#ffffff` (blanco)
- **Secundario naranja:** `#ef5e24` (usado en CTAs y acentos)
- **Secundario azul:** `#2c358c` (usado en gradientes y elementos secundarios)
- **Acento:** `#000000` (negro, botones principales)

Para cambiar colores globales, editar:
- `tailwind.config.mjs` → sección `colors`
- `src/styles/globals.css` → CSS variables en `:root`

### Contenido Editable

**Reseñas:** `src/content/reviews/*.md`
```yaml
---
title: "Título de la reseña"
name: "Nombre del cliente"
rating: 5
date: "2024-12-15"
source: "google"
text: "Texto completo de la reseña"
---
```

**FAQ:** `src/content/faq/*.md`
```yaml
---
question: "¿Pregunta frecuente?"
order: 1
---
Respuesta a la pregunta. Puede tener múltiples párrafos.
```

**Servicios:** `src/content/services/*.md`
```yaml
---
title: "Nombre del servicio"
description: "Descripción breve"
icon: "mouse"  # mouse, bug, footprints, bed-double
featured: true
order: 1
---
Contenido detallado del servicio.
```

### Imágenes

- **Favicon:** `public/favicon.svg`
- **Logo:** Placeholder en Navbar y Footer (reemplazar con logo real)
- **Hero:** Placeholder con gradiente (reemplazar con imagen real)
- **Galería:** Sección de galería lista para agregar imágenes del feed de Instagram

## 🔧 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Previsualizar build |
| `npm run astro check` | Verificar tipos |

## 🚀 Deploy

### Vercel (Recomendado)

1. Instalar Vercel CLI: `npm i -g vercel`
2. Ejecutar `vercel` en la raíz del proyecto
3. Seguir las instrucciones

O conectar el repositorio en vercel.com.

### Netlify

1. Subir el contenido de `dist/` a Netlify
2. O conectar el repositorio en netlify.com

### Deploy Manual

```bash
npm run build
# Subir contenido de /dist a tu hosting
```

## 📊 SEO y Analytics

### Google Analytics 4

Agregar en `src/layouts/Layout.astro` dentro del `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Meta Pixel

Agregar en `Layout.astro` después de abrir `<body>`.

### Google Maps

El iframe en `Contact.astro` usa un embed placeholder. Reemplazar el `src` del iframe con la URL real de Google Maps del negocio.

## 📝 Notas de Desarrollo

- Componentes `.astro` son estáticos por defecto (0 JS al cliente)
- Solo `FAQAccordion.tsx` usa React con `client:visible` (se hidrata al entrar en viewport)
- `FloatingWhatsApp.astro` tiene animación pulse pero es CSS puro
- JSON-LD de LocalBusiness se genera automáticamente en `Layout.astro`
- JSON-LD de FAQPage se genera en `FAQ.astro`

## ✅ Checklist antes de Production

- [ ] Reemplazar números de WhatsApp y teléfono reales
- [ ] Actualizar dirección de Google Maps embed
- [ ] Agregar logo real (reemplazar placeholder en Navbar y Footer)
- [ ] Agregar imágenes reales del negocio
- [ ] Actualizar reseñas con datos reales de Google
- [ ] Configurar analytics (GA4, Meta Pixel)
- [ ] Cambiar URL del sitemap en `public/robots.txt`
- [ ] Hacer fork del proyecto y conectar a Vercel/Netlify

## Licencia

Proyecto privado para JM Desinfecciones.