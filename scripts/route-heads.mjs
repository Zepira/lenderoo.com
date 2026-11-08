// After `vite build`: write dist/<route>.html for each page in src/lib/pages.json,
// a copy of index.html with that page's title, description, canonical and OG
// tags, so links shared to a page (and crawlers that don't run JS) see the right
// details. vercel.json's cleanUrls serves /privacy from privacy.html.
import { readFileSync, writeFileSync } from "node:fs";

const SITE_URL = "https://lenderoo.app";
const pages = JSON.parse(readFileSync(new URL("../src/lib/pages.json", import.meta.url), "utf8"));
const dist = new URL("../dist/", import.meta.url);
const template = readFileSync(new URL("index.html", dist), "utf8");

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function replaceOnce(html, pattern, value, label) {
  if (!pattern.test(html)) throw new Error(`route-heads: no ${label} in dist/index.html`);
  return html.replace(pattern, value);
}

for (const { path, title, description } of pages) {
  const url = `${SITE_URL}${path}`;
  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`, "title");
  html = replaceOnce(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${escape(description)}$2`, "description");
  html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`, "canonical");
  html = replaceOnce(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${escape(title)}$2`, "og:title");
  html = replaceOnce(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${escape(description)}$2`, "og:description");
  html = replaceOnce(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`, "og:url");
  const file = path === "/" ? "index.html" : `${path.slice(1)}.html`;
  writeFileSync(new URL(file, dist), html);
  console.log(`route-heads: dist/${file}`);
}
