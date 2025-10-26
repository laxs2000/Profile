Playwright LinkedIn extractor

This folder contains a small Playwright script that extracts visible content from a public LinkedIn profile URL.

Files
- linkedin-extract.js: Node script using Playwright that prints a JSON object with name, headline, about, experiences, education, skills, and featured links.

Run locally (recommended workflow)

1. From your project root, install Playwright as a dev dependency:

```bash
npm install -D playwright
npx playwright install --with-deps
```

2. Run the extractor with the profile URL:

```bash
node scripts/linkedin-extract.js https://www.linkedin.com/in/lax-seshan-334786/
```

Output
- The script prints a JSON object to stdout. Save it to a file if you want:

```bash
node scripts/linkedin-extract.js <url> > profile.json
```

Warnings and notes
- Use this locally. Avoid excessive automated scraping of LinkedIn (it may block requests or violate their Terms of Service).
- The script is heuristic and depends on LinkedIn's DOM; it may stop working if LinkedIn changes markup or requires login for the content.
- If the profile is private or requires login, the script will not return the full content unless you add an authenticated context (not recommended here).

If you want, I can:
- Produce a cleaned, LinkedIn-ready draft from the extracted JSON once you run the script and paste the JSON here.
- Add an authenticated version (requires you to provide credentials locally) — but I will only provide the code and clear instructions; you'll run it locally.
