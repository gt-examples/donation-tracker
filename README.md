# Donation Tracker

A charity donation tracking dashboard showcasing locale-aware currency, number, and date formatting with gt-next internationalization.

**[Live Demo](https://donation-tracker.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app demonstrates how General Translation handles real-world i18n scenarios in a donation tracking context. Campaign amounts, donor counts, progress percentages, and deadlines are all formatted according to the user's locale, while campaign names and descriptions are fully translated.

## GT Features Used

- `<T>` — JSX translation
- `<Currency>` — Locale-aware currency formatting
- `<Num>` — Number and percentage formatting
- `<DateTime>` — Date formatting
- `<LocaleSelector>` — Language picker
- `getGT` — Server-side string translations
- `generateMetadata` — Translated SEO metadata with OG tags
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/donation-tracker.git
cd donation-tracker
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
