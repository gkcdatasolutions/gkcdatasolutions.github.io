# GKC Data Solutions Inc. website

The public consultancy and product website for **GKC Data Solutions Inc.**, led by Gord Cross, Principal. The site presents business analysis, continuous improvement, systems integration, custom software development, AI integration and software modernization alongside Data Discovery.

Repository: `gkcdatasolutions/gkcdatasolutions.github.io` under the authorized `gkcdatasolutions` personal GitHub account. Production URL: `https://gkcdatasolutions.com/`.

## Architecture

This is a **zero-build static site**. Each page is a complete semantic HTML document with a shared local stylesheet and a small optional JavaScript enhancement for mobile navigation. There is no framework, package manager, dependency installation, generated production directory or server-side component.

| URL | Source | Content |
| --- | --- | --- |
| `/` | `index.html` | Positioning, featured Integration Hub, three supporting projects, Gord's introduction, four problems, six service links and engagement/contact guidance |
| `/services/` | `services/index.html` | Six service sections with stable anchors |
| `/work/` | `work/index.html` | Four representative case studies and the modernization approach |
| `/data-discovery/` | `data-discovery/index.html` | Product, supported formats, source protection, workflow and use cases |
| `/about/` | `about/index.html` | Company details, Gord's profile, his background and operating principles |
| `/contact/` | `contact/index.html` | Direct email contact and discussion prompts |
| Missing URL | `404.html` | Branded return navigation |

- `styles.css` contains the shared palette, type scale, layouts, component styles, responsive rules and focus/reduced-motion treatments.
- `site.js` progressively enhances the mobile menu and the screenshot viewer. Navigation links remain visible when JavaScript is disabled, and each screenshot link opens its full image directly. The menu enhancement supports keyboard activation, Escape, closing after navigation and viewport changes. The viewer opens a native `<dialog>`, returns focus to the link it was opened from, and suppresses the focus ring when the link was opened by pointer rather than keyboard.
- `sitemap.xml` lists the six public pages. Each HTML page has its own title, description, canonical URL and social metadata. JSON-LD describes the company and website, internal-page breadcrumbs, Gord on About, and the Windows application on Data Discovery.
- The original company-provided `assets/gkc-logo.png` is unchanged. `gkc-mark.png`, `favicon-32.png` and `apple-touch-icon.png` are browser-rendered square badges showing the original mark with its surrounding outer padding removed; the logo was not redrawn. `og-gkc.png` is a 1200 × 630 social card using that mark and the site's typography.
- Public Sans regular and semibold are served locally from `assets/fonts/`, with a system-font fallback and `font-display: swap`. The font files are from the official [Public Sans repository](https://github.com/uswds/public-sans/tree/d3df3455fb94643925f816276e81b231bc31619f/fonts/webfonts); their SIL Open Font License is included in `assets/fonts/OFL.txt`. There is no third-party font request, analytics, cookie, form processor or other service integration.
- The presentation uses navy with copper accents. The original company logo and existing social-sharing image remain unchanged.
- Gord's supplied LinkedIn profile is linked from About and every footer, and appears in the About `Person.sameAs` data. Visible top-level breadcrumbs are omitted; their structured data remains.
- Contact buttons use `mailto:` links. Demonstration and modernization links prefill the subject; the visitor sends the message through their own email application. There is no web form or server-side submission endpoint.

The original homepage anchors `#top`, `#company`, `#data-discovery` and `#contact` remain meaningful. The company name, public email address, domain and Data Discovery's supported formats and read-only source protection remain visible. Data Discovery's dedicated page retains the supported Word, Excel, PDF, `.txt` and `.eml` information. This repository contains no application download, signing pipeline or certificate configuration.

## Editing

Edit the HTML and CSS directly. The pages share consistent markup and CSS classes; no template compilation is required. When changing the header or footer, apply the same change to all seven HTML documents, preserving each page's `aria-current="page"` navigation state. Keep each page's title, description, canonical URL, Open Graph and X/Twitter fields consistent with that page.

Use the approved redesign brief as the content and positioning source. The public project names are Integration Hub, Data Discovery, Email Archiver and Transformer. Client attribution is intentionally generic on Work. About names Industrial Forestry Service, Allnorth Consultants and Northern Development Initiative Trust, which Gord approved directly. The modernization approach is described as a service approach, not a fabricated completed client engagement.

Gord's subsequent positioning clarification takes precedence over copy that implies every engagement ends in a custom build: always assess software already on the market against the client's requirements first. Recommend buying when an existing application fits. Build only for needs the market cannot meet, including missing parts around a suitable existing product. Recommendations must be fit for purpose and serve the client's interests; development is a means to that end.

Do not add unverified credentials, client names, testimonials, metrics, measured outcomes or product claims. Use only sanitized, approved screenshots; see **Screenshots** below. No confidential client information is included.

A professional headshot for the About profile is still outstanding; do not substitute a stock portrait or an invented interface. Other client work needs permission before screenshots or identifying details are published.

## Screenshots

Published captures: the Data Discovery Ask screen on the home page, and the Email Archiver Failures & Replay and Email Search screens in the Work case study. Each is a cropped detail that opens the full screen in the viewer described above.

- **Capture narrow, not wide.** These apps are local web UIs, so capture through Chrome DevTools: `Ctrl+Shift+M`, set the dimensions, reveal DPR through the device toolbar's three-dot menu (*Add device pixel ratio*), then `Ctrl+Shift+P` and *Capture full size screenshot*. Match the app's own content-column width to the slot the image will occupy, so its text renders near 1:1. An 820px viewport suits the ~525px home-page slot; 1440 suits the 1184px Work column. A wide capture squeezed into a narrow slot is why the previous screenshot was unreadable.
- **Set DPR to 2 or 3.** That is what keeps text edges clean. Export WebP; the detail crops are roughly a fifth the size of the equivalent PNG.
- **Crop clear of the app sidebar**, whose active-item highlight extends past the nav panel itself, and end on a complete row rather than a sliced one.
- **Check every capture for personal data before publishing.** One Email Archiver capture exposed a personal mailbox. The pixels were destroyed in the source image before either asset was derived from it, so the crop and the full view stay consistent.

## Local preview

Serve the repository root with any local static HTTP server. For example, if Python is installed:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8765/`. Directory routes and root-relative assets require an HTTP preview; opening the files with `file://` is not the supported preview method. Stop the server with Ctrl+C.

Python's basic server uses its own missing-file response. Visit `/404.html` to inspect the branded error document locally; GitHub Pages serves that document for missing production paths.

Two ways that server misleads. It sends no `Cache-Control`, so a browser keeps serving an old `styles.css` or `site.js` after you change one and the page renders new markup against stale assets; force-reload, or serve with `no-store`. It also has no MIME type for `.webp` on some installs and falls back to `application/octet-stream`, which makes a browser download the image instead of displaying it. GitHub Pages sends `image/webp` correctly, so both are preview artefacts only.

## Verification

There is no build command or installed test suite. Before publication:

1. Preview all six pages and `/404.html` at desktop, tablet and narrow mobile widths. Check text at 200% enlargement, overflow, readable diagrams and focus visibility.
2. Navigate by keyboard: skip link, menu button, all navigation links and calls to action. Verify Escape closes the mobile menu and returns focus to its button.
3. Disable JavaScript and confirm the navigation and content remain available. Check reduced-motion behaviour.
4. Verify local links, service/project anchors, original homepage anchors, email targets and image loading.
5. Check unique page titles and descriptions, canonical and Open Graph URLs, JSON-LD, sitemap entries and icon/social-card dimensions.
6. If Node.js is already available, `node --check site.js` checks JavaScript syntax without installing anything.
7. Run `git diff --check` and verify the diff does not change `CNAME`, `.nojekyll`, the original logo or deployment configuration.

The first redesign was checked locally in Chromium-based Edge. The editorial/copper revision was checked in the in-app browser at 1440, 1024, 768, 390 and 320px widths. Keyboard navigation, Escape/focus return, navigation without the enhancement script, and 200% text enlargement passed. All local links and fragments resolve, metadata and JSON-LD parse, and the updated text/background pairs exceed 4.5:1 contrast. The reduced-motion stylesheet remains in place. The screenshot viewer was checked for Escape, focus return, the pointer versus keyboard focus-ring distinction, and the JavaScript-off path, which opens the image inline rather than downloading it. The screenshot figures were checked for overflow at 1440, 1024, 768, 390 and 320px. Verification tooling is kept outside the website repository; it is not a runtime or build dependency.

## Production configuration — preserve

- GitHub Pages publishes the root of `main`; `.nojekyll` preserves direct static-file publication.
- The root `CNAME` file records `gkcdatasolutions.com` as the custom domain. Preserve it exactly.
- HTTPS enforcement is enabled. Do not change certificates or code-signing configuration as part of website content work.
- GitHub Pages publishing is owned by the authorized `gkcdatasolutions` personal GitHub account; DNS remains managed through Squarespace.
- The apex domain routes to GitHub Pages through GitHub's four documented `A` records.
- `www.gkcdatasolutions.com` is a `CNAME` for `gkcdatasolutions.github.io` and redirects to the primary apex domain.
- The `_github-pages-challenge-gkcdatasolutions` TXT record used for account-level domain verification must remain in DNS permanently.
- Preserve all Google Workspace MX, TXT and other email-related DNS records.

The site is developed on `hero-revision`, the single working line, and published by fast-forwarding `main` to it. The redesign, the screenshots and the About biography have all been published that way, so `main` and `hero-revision` are level. The earlier `codex/consultancy-website-redesign` branch is retired: its commits are ancestors of `hero-revision`, and the remote branch remains only as a historical marker. Pushing `hero-revision` stores work for review and publishes nothing. **Publishing is a separate decision every time. Do not merge to `main`, change the Pages source, or deploy without Gord saying so explicitly.** Before a fast-forward, run `git fetch && git branch -f main origin/main` so local `main` is not behind.

Official hosting reference:

- [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Verifying your custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Securing GitHub Pages with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
