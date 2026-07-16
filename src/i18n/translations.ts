export const langs = ["es", "en"] as const;
export type Lang = typeof langs[number];

export const translations = {
  es: {
    siteTitle: "Teorema del Mono Infinito",
    home: {
      title: "El Teorema del Mono Infinito",
      intro: 'Si un mono pulsa teclas al azar en un teclado durante un tiempo <strong>infinito</strong>, acabará escribiendo cualquier texto dado, incluyendo las obras completas de Shakespeare.',
      howTitle: "¿Cómo funciona?",
      how1: 'El teorema se basa en la probabilidad. Cada vez que el mono pulsa una tecla, existe una pequeña pero <em>no nula</em> probabilidad de que sea el carácter correcto. Con un número infinito de intentos, cualquier secuencia finita de caracteres aparecerá con probabilidad 1.',
      how2: 'En matemáticas esto se conoce como el <strong>lema de Borel-Cantelli</strong>: si un evento tiene una probabilidad positiva de ocurrir en cada intento, ocurrirá infinitas veces dado un número infinito de intentos.',
      exampleTitle: "Un ejemplo para ponerlo en perspectiva",
      example1: 'La probabilidad de que un mono escriba la palabra <em>"SHAKESPEARE"</em> (11 letras) pulsando teclas aleatorias de 28 caracteres (26 letras, espacio y salto de línea) es:',
      example2: "Casi imposible en un intento, pero <strong>inevitable</strong> con infinitos intentos.",
      ctaMonkey: "Prueba a ser el mono →",
      ctaBot: "Ver el bot mono →",
    },
    beTheMonkey: {
      title: "Tú eres el Mono",
      subtitle: "Pulsa cualquier tecla o haz clic en el botón",
      currentChar: "Carácter actual",
      total: "Total",
      words: "Palabras (~)",
      addChar: "Añadir carácter",
      clearAll: "Borrar todo",
    },
    monkeyBot: {
      title: "El Bot Mono",
      subtitle: "Generación automática de caracteres · se ejecuta cada hora",
      stats: "Estadísticas",
      totalChars: "Total chars",
      words: "Palabras (~)",
      lastUpdated: "Última actualización",
      never: "Nunca",
      footer: "Esta página se genera en tiempo de compilación. Los caracteres se añaden automáticamente cada hora mediante GitHub Actions y el sitio se reconstruye en cada commit.",
    },
    charDisplay: {
      title: "Caracteres generados",
      noChars: "Aún no hay caracteres. El bot empezará pronto.",
    },
    wordSearch: {
      placeholder: "Buscar una palabra...",
      noChars: "Aún no hay caracteres.",
      zeroMatches: "0 coincidencias",
      match: "coincidencia",
      matches: "coincidencias",
    },
    nav: {
      back: "← Volver al inicio",
      switchLang: "EN",
    },
    footer: {
      madeBy: "hecho por",
    },
  },
  en: {
    siteTitle: "Infinite Monkey Theorem",
    home: {
      title: "The Infinite Monkey Theorem",
      intro: 'If a monkey presses keys at random on a keyboard for an <strong>infinite</strong> amount of time, it will eventually type any given text, including the complete works of Shakespeare.',
      howTitle: "How does it work?",
      how1: 'The theorem is based on probability. Each time the monkey presses a key, there is a small but <em>non-zero</em> probability that it is the correct character. With an infinite number of attempts, any finite sequence of characters will appear with probability 1.',
      how2: 'In mathematics this is known as the <strong>Borel-Cantelli lemma</strong>: if an event has a positive probability of occurring on each attempt, it will occur infinitely many times given an infinite number of attempts.',
      exampleTitle: "An example to put it in perspective",
      example1: 'The probability of a monkey typing the word <em>"SHAKESPEARE"</em> (11 letters) by pressing random keys from 28 characters (26 letters, space and newline) is:',
      example2: "Nearly impossible in one attempt, but <strong>inevitable</strong> with infinite attempts.",
      ctaMonkey: "Try being the monkey →",
      ctaBot: "Watch the bot monkey →",
    },
    beTheMonkey: {
      title: "You are the Monkey",
      subtitle: "Press any key or click the button",
      currentChar: "Current character",
      total: "Total",
      words: "Words (~)",
      addChar: "Add character",
      clearAll: "Clear all",
    },
    monkeyBot: {
      title: "The Bot Monkey",
      subtitle: "Automated character generation · runs every hour",
      stats: "Stats",
      totalChars: "Total chars",
      words: "Words (~)",
      lastUpdated: "Last updated",
      never: "Never",
      footer: "This page is generated at build time. Characters are added automatically every hour via GitHub Actions and the site rebuilds on each commit.",
    },
    charDisplay: {
      title: "Generated characters",
      noChars: "No characters yet. The bot will start soon.",
    },
    wordSearch: {
      placeholder: "Search for a word...",
      noChars: "No characters yet.",
      zeroMatches: "0 matches",
      match: "match",
      matches: "matches",
    },
    nav: {
      back: "← Back to home",
      switchLang: "ES",
    },
    footer: {
      madeBy: "made by",
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
