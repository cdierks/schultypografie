# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

TailwindCSS v4 theme development environment for a Ghost CMS blog. HTML files are static prototypes that map 1:1 to Ghost Handlebars templates — design here, port to Ghost later.

## Commands

```bash
npm install          # Abhängigkeiten installieren (einmalig)
npm run dev          # Dev-Server starten (http://localhost:5173)
npm run build        # Produktions-Build nach dist/
npm run preview      # Build lokal vorschauen
```

## Architecture

**Stack:** Vite 6 + TailwindCSS v4 (via `@tailwindcss/vite` plugin, kein `tailwind.config.js` nötig)

**CSS-Einstiegspunkt:** `src/css/app.css` mit `@import "tailwindcss"` — alle Tailwind-Utilities sind direkt verfügbar.

**Multi-Page Setup:** `vite.config.js` listet alle HTML-Dateien als Rollup-Eingabe. Neue Seiten dort eintragen.

## Ghost-Template-Mapping

| HTML-Datei     | Ghost-Template  | Zweck                        |
|---------------|-----------------|------------------------------|
| `index.html`  | `index.hbs`     | Blog-Startseite (Post-Liste) |
| `post.html`   | `post.hbs`      | Einzelner Artikel            |
| `page.html`   | `page.hbs`      | Statische Seite              |
| `tag.html`    | `tag.hbs`       | Tag-Archiv                   |
| `author.html` | `author.hbs`    | Autoren-Seite                |

Ghost-Handlebars-Entsprechungen sind als HTML-Kommentare inline dokumentiert, z.B.:
```html
<h1>Artikeltitel</h1><!-- Ghost: {{title}} -->
```

## Ghost-Portierung (Hinweise)

- `{{ghost_head}}` ersetzt `<link rel="stylesheet">` im `<head>`
- `{{ghost_foot}}` ersetzt `<script>` vor `</body>`
- Wiederholende Header/Footer-Blöcke werden zu `partials/` (z.B. `{{> header}}`)
- Ghost verwendet `.gh-content` als CSS-Hook für den Artikelinhalt — diese Klasse bereits verwenden
- Bilder: `{{img_url feature_image size="xl"}}` für responsive Bildgrößen
