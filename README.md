# Shengsheng Lin Academic Homepage

Single-page academic homepage built with plain HTML, CSS, and JavaScript. It runs directly on GitHub Pages with no build step.

## File Structure

```text
.
|-- assets/
|   |-- cyclenet-neurips2024-spotlight-poster.png
|   |-- didi-logo.svg
|   |-- paper-placeholder-1.svg
|   |-- paper-placeholder-2.svg
|   |-- paper-placeholder-3.svg
|   |-- scut-emblem.jpg
|   |-- shengsheng-lin-avatar.jpg
|   |-- sparsetsf-icml2024-oral-poster.png
|   |-- tencent-logo.avif
|   `-- tqnet-icml2025-poster.png
|-- index.html
|-- script.js
|-- styles.css
`-- README.md
```

## Run Locally

Open `index.html` in a browser, or run a simple static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## How to Update Text

Edit [index.html](D:/lss-1138.github.io/index.html).

- Hero text is in the `#hero` section.
- Bio text is in the `#about` section.
- News items are in the `#news` section.
- Publications are in the `#papers` section.
- Projects, experience, awards, and contact each have their own section blocks.

## How to Replace Avatar and Paper Images

The current avatar file is `assets/shengsheng-lin-avatar.jpg`.

If you want to replace it:

1. Put the new portrait image inside `assets/`.
2. Update the `src` in [index.html](D:/lss-1138.github.io/index.html).
3. Recommended size is around `800x1000` or similar portrait ratio.

The current paper poster images in use are:

- `assets/sparsetsf-icml2024-oral-poster.png`
- `assets/cyclenet-neurips2024-spotlight-poster.png`
- `assets/tqnet-icml2025-poster.png`

The older SVG placeholders are still kept in `assets/` in case you want to switch back to generic previews:

- `assets/paper-placeholder-1.svg`
- `assets/paper-placeholder-2.svg`
- `assets/paper-placeholder-3.svg`

## How to Update Publication Links

Edit link `href` values directly in [index.html](D:/lss-1138.github.io/index.html).

Current local poster files:

- `assets/sparsetsf-icml2024-oral-poster.png`
- `assets/cyclenet-neurips2024-spotlight-poster.png`
- `assets/tqnet-icml2025-poster.png`

The `Poster` links already point to these local files. The `Paper`, `Slides`, `Blog`, `GitHub`, and `Google Scholar` links still need real URLs.

## How to Deploy to GitHub Pages

If this repository is named `<username>.github.io`, push these files to the default branch and GitHub Pages will serve them automatically.

For a project repository:

1. Push the site files to the repository.
2. Open the repository on GitHub.
3. Go to `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the branch and root folder, then save.

No build command is required.

## Editing Notes

- The site uses a sticky navbar with active section highlighting.
- The publication area is structured as a compact academic publication list rather than marketing cards.
- Dark mode follows system preference and stays visually restrained.
- Global styling is centralized in [styles.css](D:/lss-1138.github.io/styles.css).
