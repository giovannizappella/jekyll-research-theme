# Jekyll Research Theme

A small, reusable Jekyll theme for a single-page researcher profile. Designed for an immediate landing/biography page with a large square portrait, short bio, and social links. Includes light/dark modes, a pastel color palette with a fluorescent micro-accent, and a ready-to-publish demo in the `docs/` folder for GitHub Pages.

This README contains full instructions for deployment, customization, demo usage, and troubleshooting.

---

## Features

- Single-page layout focused on the hero (large square photo) and short bio
- Pastel color palette + fluorescent accent for small elements
- Light/dark mode: respects `prefers-color-scheme` and includes a JS toggle (saved to localStorage)
- Accessibility-minded (semantic HTML, alt text, keyboard-focus styles)
- Minimal JS and CSS; responsive and ready for GitHub Pages
- Demo site in `docs/` configured to be published directly via Pages

---

## Quick start (publish the demo)

1. Go to the repository Settings → Pages.
2. Under Source, choose: Branch = `main`, Folder = `/docs` and Save.
3. The demo will be published at: `https://<your-username>.github.io/jekyll-research-theme` (may take a minute).

Notes about the demo's asset paths: the demo files in `docs/` use absolute paths starting with `/docs/`. If you publish the site at the repository path above, those paths should work. If you serve the demo differently (e.g., Pages with a custom domain), you may need to change asset links to relative paths.

---

## Use the theme in your site

You can either use this repo as a remote_theme (recommended for small sites) or copy the theme files into your Jekyll site.

A) Use as a remote_theme (recommended)

1. In your site's `_config.yml` add:

```yaml
title: "Your Name"
description: "Short researcher tagline"
author: "Your Name"
plugins:
  - jekyll-remote-theme
remote_theme: giovannizappella/jekyll-research-theme
```

2. Create an index page (see example below) and push to GitHub. GitHub Pages supports `jekyll-remote-theme`.

B) Copy files into your site

Copy `_layouts/`, `_includes/`, and `assets/` from this repo into your site's root. Ensure asset links are correct (they use `relative_url` where appropriate).

---

## Example site index front matter

Use this example `index.md` to populate the theme's hero, bio, and social links.

````markdown
---
layout: default
title: "Dr. Your Name"
name: "Dr. Your Name"
title: "Associate Professor • Example University"
bio: >
  Short bio (1–3 lines). Dr. Your Name works on X, Y and Z; interested in …
photo: "/assets/images/profile-square.jpg" # square image recommended
cv: "/assets/YourName-CV.pdf"
social:
  - name: "Twitter"
    url: "https://twitter.com/yourhandle"
  - name: "GitHub"
    url: "https://github.com/yourhandle"
  - name: "ORCID"
    url: "https://orcid.org/0000-0000-0000-0000"
---
````

Notes:
- The `photo` should be a square image (example: 1200×1200) so cropping looks consistent. Use `object-fit: cover` for responsive cropping.
- If your site is served from a subpath (e.g., `https://<user>.github.io/<repo>`), set `baseurl: " /<repo>"` in `_config.yml` and use the theme's `relative_url` filters.

---

## Customization

Colors & theme variables
- The theme uses CSS variables defined in `assets/css/style.css`:
  - `--bg`, `--text`, `--muted`, `--accent`, `--accent-2`, `--fluo`
- Override any variable by adding a small custom stylesheet after the theme's CSS or by editing these variables directly if you copied files into your site.

Typography
- The theme uses system fonts by default. To use web fonts, include your font `<link>` in `_includes/head.html` and update body font-family in the CSS.

Layout
- Hero photo size is set to 320px square by default; adjust `.photo-square` in `assets/css/style.css` for a different size.
- The layout is intentionally minimal; add new sections by adding includes and editing `_layouts/default.html`.

Dark mode
- CSS uses `prefers-color-scheme` and the JS toggle (assets/js/theme.js) toggles a `.dark` class on the `documentElement`. You can further customize dark styles by checking for `.dark` in your CSS.

Accessibility
- Provide `alt` text for the `photo` and use semantic headings. Focus outlines are visible and obvious. Color contrast is tuned for readability, but you should verify contrast for your chosen accent colors.

---

## Demo details (docs/)

- `docs/index.md` contains a runnable demo that mirrors the theme's layout. The `docs/` folder is intended for easy GitHub Pages publishing.
- The demo includes `docs/assets/css/style.css` and `docs/assets/js/theme.js` copied from the theme so it can render without a Jekyll build.
- If you host the demo at the repo pages URL, absolute asset links like `/docs/assets/css/style.css` will work. If your Pages site uses a custom domain or a different path, switch the asset links in `docs/index.md` to relative links (e.g., `./assets/css/style.css`).

---

## Troubleshooting (common issues)

1) CSS or JS not loading on GitHub Pages
- Cause: incorrect asset paths when the site is hosted at a subpath.
- Fix: set `baseurl: "/jekyll-research-theme"` in `_config.yml` and ensure assets are referenced through `{{ '/assets/css/style.css' | relative_url }}` or change `docs/index.md` links to relative paths `./assets/css/style.css`.

2) Images appear broken or 404
- Cause: wrong path (absolute vs relative) or missing file.
- Fix: confirm `photo` in front matter points to an existing file under `assets/` (or an absolute URL). For repo pages, a path like `/jekyll-research-theme/assets/images/profile-square.jpg` or using `baseurl` and `relative_url` is correct.

3) Dark mode not persisting
- Cause: localStorage blocked or JS error.
- Fix: make sure `assets/js/theme.js` is loaded (check console) and that the toggle button has id `theme-toggle`. Verify no CSP is blocking inline scripts (we use an external file).

4) Remote theme not applied
- Cause: GitHub Pages needs `jekyll-remote-theme` plugin enabled; sometimes Pages ignores custom plugins.
- Fix: Use the remote_theme approach (supported by GitHub Pages) and ensure your `_config.yml` includes `plugins: - jekyll-remote-theme`. Alternatively, copy theme files into your site.

5) Demo looks different locally vs Pages
- Cause: Jekyll build differences or baseurl mismatch.
- Fix: run locally with `bundle exec jekyll serve --baseurl ''` or set baseurl in `_config.yml` to match Pages (and use `relative_url` in templates).

---

## Local development

To preview a Jekyll site using this theme locally:

1. If using as remote_theme, your site's Gemfile should include `jekyll` and `github-pages` or `jekyll-remote-theme` depending on your setup.
2. Run:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000` to view.

If you copied the theme into a plain static folder (no Jekyll), open `docs/index.md` as HTML (it contains a full HTML document for demo purposes) by changing the extension to `.html` or serving via a static server.

---

## Files in this repository

- `_layouts/default.html` — main layout for the single-page profile
- `_includes/head.html` — head partial with meta and stylesheet link
- `assets/css/style.css` — theme styles (variables for easy overriding)
- `assets/js/theme.js` — theme toggle logic
- `docs/` — demo site ready for GitHub Pages
- `README.md`, `LICENSE`

---

## License

MIT — see LICENSE file.

---

If you'd like, I can (pick one):

- Update `docs/index.md` asset paths to use relative links so the demo works regardless of Pages configuration.
- Add a sample profile image and example `_config.yml` to the repo.
- Add a small GitHub Actions workflow to build and publish the demo automatically.

Tell me which change you'd like next and I'll make it.