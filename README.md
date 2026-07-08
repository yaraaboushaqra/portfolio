# Yara — Creative Director Portfolio

A clean, black/white/red portfolio site. No build tools required — just HTML, CSS, and JS.
Open `index.html` in a browser to preview it, or upload the whole folder to any host
(Netlify, Vercel, GitHub Pages, Squarespace file hosting, etc.).

## Folder structure

```
index.html                  → homepage (intro + both sections)
css/style.css                → all styling (colors, fonts, layout)
js/main.js                   → nav toggle, scroll animations
assets/                       → site-wide images (e.g. your portrait)
projects/
  creative-direction/
    01-visual-narrative/
      index.html              → this project's gallery page
      cover.jpg               → thumbnail shown on the homepage banner
      media/                  → drop your images/videos here
    02-live-production/
    03-film-direction/
  branding-identity/
    01-brand-identity/
    02-visual-system/
    03-packaging-design/
```

Every image currently in the site is a black placeholder labeled with its project
name — replace them with your own work.

## Adding images/videos to an existing project

1. Drop your files into that project's `media/` folder (any name, e.g. `05.jpg`).
2. Open that project's `index.html`.
3. Copy one `<figure>...</figure>` block inside the `<section class="gallery-media">`
   and change the `src` to your new file.
   - Images: `<img src="media/05.jpg" alt="...">`
   - Videos: see the "Adding video" section below — there are two patterns
     depending on whether the clip should autoplay silently or play with sound.
   - To place two items side by side, wrap two `<figure>` blocks in
     `<div class="gallery-media gallery-media--pair">...</div>`.
4. Replace `cover.jpg` in the project folder with your own image — this is the
   thumbnail shown in the homepage banner.

No JSON files, no manifest, no build step — just files and one HTML line per item.

## Adding video

There are two patterns, both shown as commented-out examples in
`projects/creative-direction/01-visual-narrative/index.html`:

**A) Silent looping clip** — like a Behance/Instagram reel: no sound, plays
automatically as it scrolls into view, pauses when off-screen (handled by
`js/main.js` so multiple videos on a page don't all play at once).

```html
<video src="media/clip.mp4" muted loop playsinline
       preload="metadata" poster="media/clip-poster.jpg" data-autoplay></video>
```

**B) Longer clip with sound** — a case study walkthrough or reel with audio,
click to play:

```html
<video src="media/clip.mp4" controls preload="metadata"
       poster="media/clip-poster.jpg"></video>
```

Notes:
- Export as **MP4 (H.264)**, 1080p max, ~2–5 Mbps bitrate — keeps file size
  reasonable and plays everywhere. HandBrake (app) or
  `ffmpeg -i in.mov -vcodec h264 -crf 23 out.mp4` (command line) both work.
- Always add a `poster` image (a still frame from the video, same aspect
  ratio) so the space doesn't show a black/blank box while it loads.
- `muted` + `playsinline` must both be present for autoplay to work on iPhone —
  don't drop either one from pattern A.
- Keep clips short (a few seconds to ~30s) for pattern A; anything longer
  should use pattern B with controls so it's not silently looping forever.

## Adding a whole new project

1. Duplicate an existing project folder (e.g. copy `01-visual-narrative` to
   `04-new-project`) inside `creative-direction/` or `branding-identity/`.
2. Replace the images in its `media/` folder and swap out `cover.jpg`.
3. Open the new `index.html` and update the title, role/year/category, and description.
4. Update the "Next Project" link at the bottom of the *previous* project so the
   sequence flows correctly, and update the link in the *new* project to point to
   whatever should come after it.
5. On the homepage (`index.html`), copy one `<a class="project-row">` block in the
   relevant section and point its `href` and `cover.jpg` to the new project.

## Editing text

- **Headline / bio**: edit directly inside the `<section class="intro">` block in
  `index.html` — look for the `EDIT:` comments.
- **Section intros**: the short paragraphs under "Creative Direction & Productions"
  and "Branding & Visual Identity" — inside each `<div class="section-label">`.
- **Contact email / social links**: in the `<footer>` of `index.html` and every
  project page.

## Changing colors

Open `css/style.css`, top of the file:

```css
:root {
  --black: #0a0a0a;
  --white: #f4f4f2;
  --red: #ca021f;   /* your brand red */
}
```

Change any of these and it updates across the whole site.

## Changing fonts

The site uses **Archivo** (bold display headlines) and **Inter** (body text) from
Google Fonts. To swap fonts:

1. Update the Google Fonts `<link>` tags in the `<head>` of every HTML file.
2. Update `--font-display` and `--font-body` in `css/style.css`.

## Notes

- The site is fully responsive; the nav collapses to a hamburger menu on mobile.
- Sections reveal with a subtle fade-in as you scroll (see `.reveal` in the CSS/JS).
- All project pages are cross-linked with a "Next Project" banner at the bottom,
  looping from the last branding project back to the first creative direction project.
