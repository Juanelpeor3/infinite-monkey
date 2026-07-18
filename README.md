# Infinite Monkey Theorem

A web app based on the **Infinite Monkey Theorem** — if a monkey presses keys at random for an infinite amount of time, it will eventually type any text, including the complete works of Shakespeare.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Features

- **Home** — explanation of the theorem with probability math
- **Be the Monkey** — type characters manually and watch your progress. Characters are saved in `localStorage`
- **Bot Monkey** — automated character generation via GitHub Actions (runs every hour), with live stats
- **Word search** — search for any word across generated characters, with highlighted matches
- **i18n** — Spanish (default) and English (`/en/`)
- **Easter eggs** — try clicking the title 7 times, or searching for "shakespeare"

## Stack

| Tool | Version |
|------|---------|
| Astro | ^7 |
| Tailwind CSS | ^4 |
| Node | >=22.12 |

## Getting started

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/
│   ├── BeTheMonkey.astro   # Interactive monkey page
│   ├── MonkeyBot.astro     # Bot stats page
│   ├── CharDisplay.astro   # Generated characters panel
│   ├── WordSearch.astro    # Search bar with highlighting
│   ├── LangToggle.astro    # ES/EN switcher
│   └── Footer.astro
├── i18n/
│   └── translations.ts     # All UI strings in ES and EN
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro         # Home (ES)
│   ├── bethemonkey.astro
│   ├── monkey-bot.astro
│   └── en/                 # English routes
│       ├── index.astro
│       ├── bethemonkey.astro
│       └── monkey-bot.astro
└── data/
    └── monkey-bot.json     # Generated characters + metadata
```

## Automation

The bot adds 50 random characters every hour via a GitHub Actions workflow. Each run commits to `monkey-bot.json` and triggers a site rebuild.

## Made by

[Juanelpeor3](https://github.com/Juanelpeor3)
