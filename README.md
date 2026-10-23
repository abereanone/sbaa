# Southern Baptists for Abolishing Abortion

Static mirror of southernbaptistsabolishingabortion.com (originally WordPress, captured with HTTrack), served by Cloudflare Pages from `abereanone/sbaa`. There is no build step: pushing to `main` publishes the repo root as it is, so **anything at the top level is public**.

## Layout

- `index.html`, `about/`, `contact/`, `read-the-resolution/`, `what-is-abolitionism/`, `blog-2/`, yearly post folders (`2020/` to `2024/`), `tag/`, `author/`, `i/`.
- `includes/footer.html` and `includes/footer.js` - the shared footer. `footer.js` fetches `/includes/footer.html` and inserts it into each page.
- `tools/gen-sitemap.mjs` - regenerates `sitemap.xml`. Run `node tools/gen-sitemap.mjs` from the repo root and commit the result after adding or removing posts or pages. It is deliberately not part of the Pages build.
- `wp-content/` - mirrored theme and uploads.

Local-only files (`serve.py`, `serve.bat`, `launchClaude.bat`) are git-ignored.
