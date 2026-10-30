# ForgeVanguard Cyber Consulting: Website

[![Live site](https://img.shields.io/badge/live-forgevanguard.pages.dev-F38020?logo=cloudflare&logoColor=white)](https://forgevanguard.pages.dev)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![No tracking](https://img.shields.io/badge/cookies%20%2F%20analytics-none-success)

Source for **[forgevanguard.pages.dev](https://forgevanguard.pages.dev)**, the website of ForgeVanguard Cyber Consulting, run by Steven Drew.

ForgeVanguard offers:

- **Cybersecurity services**: penetration testing, vulnerability assessment, cloud and Active Directory security reviews, incident response support
- **Compliance and advisory**: risk assessments, gap analysis (NIST CSF, ISO 27001, SOC 2, PCI DSS, GDPR), vCISO advisory, policy development
- **Website design and management**: custom builds, care plans, security hardening, performance and SEO
- **IT consulting**: small-business IT advisory, remote support, Windows Server and Linux administration, cloud setup
- **Retainers and packages** for ongoing work

## Tech

A deliberately small static site: hand-written HTML, CSS and a few lines of JavaScript. No framework, no build step, no cookies, no analytics.

```
index.html     Landing page: services, packages, about, contact form
privacy.html   Privacy notice
styles.css     Dark, responsive theme (mobile-first breakpoints)
main.js        Mobile nav toggle and footer year
assets/        Logo
```

- Hosted on **Cloudflare Pages** (static, HTTPS by default)
- Contact form posts to a form-to-email service; a honeypot field filters basic spam
- Open Graph / Twitter card metadata and a canonical URL for link previews and SEO

## Run locally

```bash
git clone https://github.com/ForgeVanguard/forgevanguard-site.git
cd forgevanguard-site
python3 -m http.server 8080   # then open http://localhost:8080
```

## Deploy

Cloudflare Pages settings: framework preset **None**, build command empty, output directory `/`.

## License

© 2026 ForgeVanguard Cyber Consulting. All rights reserved. The name, logo and written content are not licensed for reuse.
