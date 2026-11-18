# Southern Baptists for Abolishing Abortion

Static mirror of southernbaptistsabolishingabortion.com (originally WordPress, captured with HTTrack), served by Cloudflare Pages from `abereanone/sbaa`. There is no build step: pushing to `main` publishes the repo root as it is, so **anything at the top level is public**.

## Layout

- `index.html`, `about/`, `contact/`, `read-the-resolution/`, `what-is-abolitionism/`, `blog-2/`, yearly post folders (`2020/` to `2024/`), `tag/`, `author/`, `i/`.
- `includes/footer.html` and `includes/footer.js` - the shared footer. `footer.js` fetches `/includes/footer.html` and inserts it into each page.
- `tools/gen-sitemap.mjs` - regenerates `sitemap.xml`. Run `node tools/gen-sitemap.mjs` from the repo root and commit the result after adding or removing posts or pages. It is deliberately not part of the Pages build.
- `wp-content/` - mirrored theme and uploads.

Local-only files (`serve.py`, `serve.bat`, `launchClaude.bat`) are git-ignored.

## Outside links (click counting)

Links to other sites point at `/go/<name>` and open in a new tab; the `# go-links` block in `_redirects` sends each to the real address, and Cloudflare logs the click for `C:/code/site-stats`. `go/links.json` lists the names. After adding or editing a page, run from the repo root (Git Bash needs `MSYS_NO_PATHCONV=1`):

```bash
node C:/code/go-links/go-links.mjs . --base /go/ --own southernbaptistsabolishingabortion.com,www.southernbaptistsabolishingabortion.com --skip i
```

Safe to re-run. Old `http://` links stay direct (Cloudflare redirect rules must point at https). Give a link `data-no-go` to leave it alone.
