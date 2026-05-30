# Maria Luiza Ottoni Architecture Portfolio

Static portfolio website generated from `2026.05.30 PORTFOLIO_Maria-Ottoni.pdf`.

## Deploy to GitHub Pages

1. Update `SITE_URL` references in the HTML metadata if your repository name differs.
2. Create a GitHub repository, then run:

```bash
git init
git add .
git commit -m "Build Maria Luiza Ottoni portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/maria-ottoni-portfolio.git
git push -u origin main
```

3. In GitHub, open Settings -> Pages and choose `Deploy from a branch`, `main`, `/root`.

## Optional Netlify Forms

The contact form includes `data-netlify="true"`. On Netlify, deploy the repo and forms will be detected automatically. For GitHub Pages, replace the form `action` with a Formspree endpoint.

## Image Builds

Generated image variants are already included. To re-optimize after replacing source imagery:

```bash
npm install
npm run build:images
```

## Notes

The full source portfolio PDF is larger than GitHub's 100 MB regular-file limit, so it is not committed. The site includes a lightweight CV PDF and downloadable per-project PDF excerpts instead. The PDF table of contents names Kitchener Slender and Housing (R)Evolution, but full project-detail pages for those entries were not present in the extractable page sequence. They are not listed as project pages to avoid inventing content.
