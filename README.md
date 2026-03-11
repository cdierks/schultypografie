# Schultypografie

Theme-Entwicklungsumgebung für ein [Ghost CMS](https://ghost.org/) Blog. Die HTML-Dateien sind statische Prototypen, die 1:1 auf Ghost-Handlebars-Templates abgebildet werden — hier designen, danach nach Ghost portieren.

## Stack

- **[Vite 6](https://vitejs.dev/)** — Dev-Server und Build-Tool
- **[TailwindCSS v4](https://tailwindcss.com/)** — Utility-first CSS (via `@tailwindcss/vite`, kein `tailwind.config.js` nötig)

## Setup

```bash
npm install
npm run dev
```

Der Dev-Server läuft unter `http://localhost:5173`.

## Befehle

| Befehl            | Beschreibung                          |
|-------------------|---------------------------------------|
| `npm run dev`     | Dev-Server starten                    |
| `npm run build`   | Produktions-Build nach `dist/`        |
| `npm run preview` | Build lokal vorschauen                |

## Projektstruktur

```
schultypografie/
├── src/
│   ├── css/app.css      # CSS-Einstiegspunkt (@import "tailwindcss")
│   └── js/main.js       # Theme-JavaScript
├── index.html           # → index.hbs  (Blog-Startseite)
├── post.html            # → post.hbs   (Einzelner Artikel)
├── page.html            # → page.hbs   (Statische Seite)
├── tag.html             # → tag.hbs    (Tag-Archiv)
├── author.html          # → author.hbs (Autoren-Seite)
└── vite.config.js
```

## Ghost-Template-Mapping

| HTML-Datei     | Ghost-Template  | Zweck                        |
|----------------|-----------------|------------------------------|
| `index.html`   | `index.hbs`     | Blog-Startseite (Post-Liste) |
| `post.html`    | `post.hbs`      | Einzelner Artikel            |
| `page.html`    | `page.hbs`      | Statische Seite              |
| `tag.html`     | `tag.hbs`       | Tag-Archiv                   |
| `author.html`  | `author.hbs`    | Autoren-Seite                |

Ghost-Handlebars-Entsprechungen sind als HTML-Kommentare inline dokumentiert:

```html
<h1>Artikeltitel</h1><!-- Ghost: {{title}} -->
```

## Ghost-Portierung

- `{{ghost_head}}` ersetzt `<link rel="stylesheet">` im `<head>`
- `{{ghost_foot}}` ersetzt `<script>` vor `</body>`
- Wiederholende Header/Footer-Blöcke werden zu `partials/` (z.B. `{{> header}}`)
- Ghost verwendet `.gh-content` als CSS-Hook für den Artikelinhalt
- Bilder: `{{img_url feature_image size="xl"}}` für responsive Bildgrößen
