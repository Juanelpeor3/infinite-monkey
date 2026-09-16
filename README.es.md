# Teorema del Mono Infinito

**Español** | [English](README.md)

Una aplicacion web que da vida al **Teorema del Mono Infinito**. La idea de que un mono pulsando teclas al azar en un teclado durante un tiempo infinito acabara escribiendo cualquier texto dado, incluyendo las obras completas de Shakespeare.

## Caracteristicas

- **Pagina de inicio**: Explicacion clara del teorema con calculos de probabilidad reales y el lema de Borel-Cantelli
- **Se el Mono**: Conviertete en el mono: pulsa cualquier tecla o haz clic para generar caracteres aleatorios. Tu progreso se guarda en `localStorage` para que nunca pierdas tu trabajo
- **Bot Mono**: Un bot automatizado que genera 50 caracteres aleatorios cada hora mediante GitHub Actions, acumulando caracteres con el tiempo
- **Busqueda de palabras**: Busca cualquier palabra en todos los caracteres generados con coincidencias resaltadas, flechas de navegacion para saltar entre resultados y un contador
- **i18n**: Soporte completo para espanol (por defecto) e ingles (`/en/`)
- **Layout a pantalla completa**: La zona de caracteres ocupa toda la altura restante de la pantalla y hace scroll internamente, sin que la pagina en si haga scroll
- **Easter eggs**: Haz clic 7 veces en el titulo de cualquier pagina para una sorpresa, o busca "shakespeare" cuando aparezca en el texto generado

## Stack tecnologico

| Herramienta | Version |
|-------------|---------|
| [Astro](https://astro.build) | ^7 |
| [Tailwind CSS](https://tailwindcss.com) | ^4 |
| Node.js | >=22.12 |
| pnpm | - |

## Empezar

### Requisitos previos

- Node.js >= 22.12
- pnpm (o npm/yarn)

### Instalacion

```bash
pnpm install
```

### Desarrollo

```bash
pnpm dev
```

### Compilar y previsualizar

```bash
pnpm build
pnpm preview
```

## Estructura del proyecto

```
src/
├── components/
│   ├── BeTheMonkey.astro    # Pagina interactiva del mono (teclado + boton)
│   ├── MonkeyBot.astro      # Pagina de estadisticas del bot (estatica, compilada)
│   ├── CharDisplay.astro    # Panel de caracteres (layout flex, scroll interno)
│   ├── WordSearch.astro     # Barra de busqueda con resaltado y navegacion
│   ├── LangToggle.astro     # Selector de idioma ES/EN
│   ├── Footer.astro         # Pie de pagina
│   └── ScrollToTop.astro    # Boton flotante para subir al inicio
├── data/
│   └── monkey-bot.json      # Caracteres generados + metadatos (actualizado por CI)
├── i18n/
│   └── translations.ts      # Todos los textos de la UI en espanol e ingles
├── layouts/
│   └── Layout.astro         # Layout principal (soporta modo fullHeight)
├── pages/
│   ├── index.astro          # Pagina de inicio (espanol)
│   ├── bethemonkey.astro    # Pagina Se el Mono (espanol)
│   ├── monkey-bot.astro     # Pagina Bot Mono (espanol)
│   └── en/                  # Rutas en ingles (misma estructura)
│       ├── index.astro
│       ├── bethemonkey.astro
│       └── monkey-bot.astro
└── styles/
    └── global.css           # Imports de Tailwind CSS
```

## Como funciona el bot

Un workflow de GitHub Actions ([`.github/workflows/monkey-bot.yml`](.github/workflows/monkey-bot.yml)) se ejecuta cada hora:

1. Lee el archivo actual `src/data/monkey-bot.json`
2. Genera 50 caracteres aleatorios del conjunto: A-Z, espacio y salto de linea
3. Los anade a los caracteres existentes
4. Hace commit y push del archivo actualizado
5. El sitio se reconstruye automaticamente en cada commit

Tambien puedes ejecutarlo manualmente desde la pestana de Actions con un numero de caracteres personalizado.

## Paginas

| Pagina | Ruta (ES) | Ruta (EN) | Descripcion |
|--------|-----------|-----------|-------------|
| Inicio | `/` | `/en` | Explicacion del teorema con matematicas de probabilidad |
| Se el Mono | `/bethemonkey` | `/en/bethemonkey` | Generacion interactiva de caracteres |
| Bot Mono | `/monkey-bot` | `/en/monkey-bot` | Estadisticas y salida del bot automatizado |

## Licencia

Este proyecto esta licenciado bajo la [Licencia MIT](LICENSE.md).

## Autor

[Juanelpeor3](https://github.com/Juanelpeor3)
