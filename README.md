# Luxury Watch Creative Director Portfolio

A static portfolio website designed for a creative director in the luxury watches field.

## Pages / Sections

- Home hero and artist introduction
- Featured artworks
- Client directory
- Projects gallery with filters
- Contact information

## Image Folder Structure

Replace the placeholder JPG files with final images using the same file names, or update `assets/js/projects.js` if you rename files.

```text
assets/images/
  hero/
    hero-main.jpg
  artworks/
    artwork-01.jpg
    artwork-02.jpg
    artwork-03.jpg
    artwork-04.jpg
  projects/
    project-01/
      image-01.jpg
      image-02.jpg
      image-03.jpg
      image-04.jpg
    project-02/
      image-01.jpg
      image-02.jpg
      image-03.jpg
    ...
    project-20/
      image-01.jpg
      image-02.jpg
      image-03.jpg
      image-04.jpg
      image-05.jpg
```

## How to Edit Projects

Open `assets/js/projects.js` and edit each project object:

```js
{
  id: 'project-01',
  title: 'Project Title',
  client: 'Client Name',
  category: 'Campaign',
  year: '2026',
  description: 'Short project description.',
  cover: 'assets/images/projects/project-01/image-01.jpg',
  images: ['image-01.jpg','image-02.jpg','image-03.jpg']
}
```

The `id` must match the folder name under `assets/images/projects/`.

## Upload to GoDaddy

1. Buy or activate a GoDaddy Linux hosting plan, cPanel hosting, or Websites + Marketing file upload option.
2. Open File Manager for the domain.
3. Upload all files from this folder into the website root, commonly `public_html`.
4. Make sure `index.html` is at the root.
5. Point the domain DNS to the hosting plan if GoDaddy has not done it automatically.

## Local Preview

Open `index.html` in a browser, or run a simple local server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.
