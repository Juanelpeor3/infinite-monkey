# Infinite Monkey Theorem

[Español](README.es.md) | **English**

A web application that brings the **Infinite Monkey Theorem** to life. The idea that a monkey pressing random keys on a keyboard for an infinite amount of time will eventually type any given text, including the complete works of Shakespeare.

## Features

- **Home page**: Clear explanation of the theorem with real probability calculations and the Borel-Cantelli lemma
- **Be the Monkey**: Become the monkey yourself: press any key or click to generate random characters. Your progress is saved in `localStorage` so you never lose your work
- **Bot Monkey**: An automated bot that generates 50 random characters every hour via GitHub Actions, accumulating characters over time
- **Word search**: Search for any word across all generated characters with highlighted matches, navigation arrows to jump between results, and a counter
- **i18n**: Full support for Spanish (default) and English (`/en/`)
- **Viewport-filling layout**: The character display fills the remaining screen height and scrolls internally, so the page itself never scrolls
- **Easter eggs**: Click any page title 7 times for a surprise, or search for "shakespeare" when it appears in the generated text

## Tech stack

| Tool | Version |
|------|---------|
| [Astro](https://astro.build) | ^7 |
| [Tailwind CSS](https://tailwindcss.com) | ^4 |
| Node.js | >=22.12 |
| pnpm | - |

## Getting started

### Prerequisites

- Node.js >= 22.12
- pnpm (or npm/yarn)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build & preview

```bash
pnpm build
pnpm preview
```

## Project structure

```
src/
├── components/
│   ├── BeTheMonkey.astro    # Interactive monkey page (keyboard input + button)
│   ├── MonkeyBot.astro      # Bot stats page (static, built at compile time)
│   ├── CharDisplay.astro    # Character display panel (flex layout, internal scroll)
│   ├── WordSearch.astro     # Search bar with match highlighting and navigation
│   ├── LangToggle.astro     # ES/EN language switcher
│   ├── Footer.astro         # Site footer
│   └── ScrollToTop.astro    # Floating scroll-to-top button
├── data/
│   └── monkey-bot.json      # Generated characters + metadata (updated by CI)
├── i18n/
│   └── translations.ts      # All UI strings in Spanish and English
├── layouts/
│   └── Layout.astro         # Main layout (supports fullHeight mode)
├── pages/
│   ├── index.astro          # Home page (Spanish)
│   ├── bethemonkey.astro    # Be the Monkey page (Spanish)
│   ├── monkey-bot.astro     # Bot Monkey page (Spanish)
│   └── en/                  # English routes (same structure)
│       ├── index.astro
│       ├── bethemonkey.astro
│       └── monkey-bot.astro
└── styles/
    └── global.css           # Tailwind CSS imports
```

## How the bot works

A GitHub Actions workflow ([`.github/workflows/monkey-bot.yml`](.github/workflows/monkey-bot.yml)) runs every hour:

1. Reads the current `src/data/monkey-bot.json`
2. Generates 50 random characters from the set: A-Z, space, and newline
3. Appends them to the existing characters
4. Commits and pushes the updated file
5. The site rebuilds automatically on each commit

You can also trigger it manually from the Actions tab with a custom character count.

## Pages

| Page | Route (ES) | Route (EN) | Description |
|------|------------|------------|-------------|
| Home | `/` | `/en` | Theorem explanation with probability math |
| Be the Monkey | `/bethemonkey` | `/en/bethemonkey` | Interactive character generation |
| Bot Monkey | `/monkey-bot` | `/en/monkey-bot` | Automated bot statistics and output |

## License

This project is licensed under the [MIT License](LICENSE.md).

## Author

[Juanelpeor3](https://github.com/Juanelpeor3)
