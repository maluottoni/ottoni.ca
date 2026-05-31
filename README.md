# Maria Ottoni Architecture Portfolio

Static portfolio website generated from `2026.05.30 PORTFOLIO_Maria-Ottoni.pdf`.

## Deploy to GitHub Pages

1. Update `SITE_URL` references in the HTML metadata if your repository name differs.
2. Create a GitHub repository, then run:

```bash
git init
git add .
git commit -m "Build Maria Ottoni portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/maria-ottoni-portfolio.git
git push -u origin main
```

3. In GitHub, open Settings -> Pages and choose `Deploy from a branch`, `main`, `/root`.

## Contact Form Recommendation

For GitHub Pages, Formspree is the simplest option: create a free form at https://formspree.io, verify the destination inbox, then replace the contact form `action` with the Formspree endpoint. Netlify Forms is also supported if the site is deployed on Netlify instead of GitHub Pages.

## Image Builds

Generated image variants are already included. To re-optimize after replacing source imagery:

```bash
npm install
npm run build:images
```

## Notes

The full source portfolio PDF is larger than GitHub's 100 MB regular-file limit, so it is not committed. The site includes a lightweight CV PDF and downloadable per-project PDF excerpts instead. The PDF table of contents names Kitchener Slender and Housing (R)Evolution, but full project-detail pages for those entries were not present in the extractable page sequence. They are not listed as project pages to avoid inventing content.


### TODO:

instead of: Expandable images which carousel zoom, make gallery not display in side by side gride but as whole width
Align title of project cards on home page
on C:\Users\Alexandre\Documents\Portfolio_Website\projects\erb-residential.html we should align the <uL> so its max horizontal width doesn't exceed the paragraph preceeding it. 

Clearly mark the ABA owned and third party companies sourced material as it is marked on portfolio and resume

Adjacent work images are not referencing correctly after we~ve done some updates on the projects, bcs there is no single soure of control of a project info the project info updated on home page tile and as adjacent work missmatch

denver missing middle actual project page implementation should be a plain pdf view of assets\images\projects\denver-missing-middle\2025.10.10 Denver Competition Boards_4 pager.pdf instead of bloated html