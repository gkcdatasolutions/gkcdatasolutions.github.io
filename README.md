# GKC Data Solutions Inc. company website

This repository contains the public company identity website for **GKC Data Solutions Inc.** It establishes the company's public presence and provides concise information about the company and Data Discovery.

The intended GitHub repository name is `gkcdatasolutions.github.io`, under the authorized `gkcdatasolutions` personal GitHub account. The intended custom domain is `gkcdatasolutions.com`.

## Architecture

The site has a zero-build static architecture: one semantic HTML document, one local stylesheet and the company-provided logo asset. It has no JavaScript, package dependencies, external assets, analytics, cookies or server-side components. The `.nojekyll` file makes the publishing intent explicit for GitHub Pages.

No `CNAME` file is included in this local-review slice. The custom domain should be established only after account-level domain verification through **Settings → Pages** for the `gkcdatasolutions` personal GitHub account.

## Local preview

Open `index.html` directly in a web browser. No installation, development server or build step is required.

## Safe publication order

1. Create the public `gkcdatasolutions.github.io` repository under the authorized `gkcdatasolutions` personal GitHub account.
2. Push the reviewed site to the repository.
3. Enable GitHub Pages from the `main` branch and `/root` folder.
4. Verify `gkcdatasolutions.com` for the personal GitHub account through **Settings → Pages** using GitHub's generated TXT record.
5. Configure the custom domain in the GitHub Pages repository.
6. Only then add the required website DNS records in Squarespace.
7. Preserve all Google Workspace MX, TXT and email-related records.
8. Enable HTTPS after GitHub provisions the certificate.

DNS values must be taken from the current official GitHub Pages documentation at the time of configuration. Do not introduce wildcard DNS records.

Official guidance:

- [Verifying your custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Securing your GitHub Pages site with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
