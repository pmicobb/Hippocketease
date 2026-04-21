# Hippocketease

A Progressive Web App for front-line pediatric foreign body ingestion triage. Based on the 2015 NASPGHAN algorithms (Kramer et al., *JPGN* 60:562-574).

**⚗️ Testing build — not for clinical use.**

## About

Pediatric foreign body ingestions (button batteries, magnets, sharp objects, food impactions, coins) are a common ER presentation that often requires specialist input. In Maine, only two facilities perform the endoscopic removals, meaning long transit times. Hippocketease helps front-line providers apply the NASPGHAN triage algorithms quickly — at the bedside, on their own phone, offline if needed.

Built as a follow-up to a CS 5001 final project at Northeastern University, in conjunction with Dr. Julia Fritz (MaineHealth Medical Partners).

## Try it

See [DEPLOY.md](DEPLOY.md) for hosting instructions. Once deployed:

- **iPhone:** Open the URL in Safari → Share → "Add to Home Screen"
- **Android:** Open the URL in Chrome → tap "Install" or Menu → "Install app"

## What's in this repo

```
├── index.html          # The app — single-file HTML with inline CSS + JS
├── manifest.json       # PWA manifest (name, icons, display mode)
├── sw.js               # Service worker (offline caching)
├── icon-*.png          # Home screen icons for iOS and Android
├── apple-touch-icon.png
├── _headers            # Server-level security headers (Netlify format)
├── .nojekyll           # Tells GitHub Pages to serve files as-is
├── DEPLOY.md           # Step-by-step hosting guide
└── README.md           # This file
```

## Security & privacy

- **No data leaves the device.** Patient info entered into the app is held in browser memory only and never transmitted.
- **Content Security Policy** blocks any third-party script from running.
- **Service worker** only caches same-origin, allowlisted files.
- **Optional 4-digit PIN** (hashed, stored locally) prevents casual misuse.
- **Assessment history** (last 10) stays on the device and can be cleared at any time.

## Citations

Kramer RE, Lerner DG, Lin T, et al. *Management of Ingested Foreign Bodies in Children: A Clinical Report of the NASPGHAN Endoscopy Committee.* J Pediatr Gastroenterol Nutr. 2015;60(4):562-574.

## License

See LICENSE file. This is educational / evaluation-stage software. Not FDA cleared. Not a substitute for clinical judgment or direct specialist consultation.
