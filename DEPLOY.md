# Deploy & Quick Start

This project is a minimal Next.js site (Home, Profile, Contact).

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
# open http://localhost:3000
```

Build for production

```bash
npm run build
npm start
```

Deploy to Vercel

- Option A (recommended): Push this repo to GitHub/GitLab and import the project in Vercel (https://vercel.com/new). Vercel will detect Next.js and configure automatically. During import, ensure:
	- Root Directory: `.` (unless your app sits in a subfolder)
	- Build Command: `npm run build`
	- Output Directory: leave blank for Next.js

- Option B (CLI): Install the Vercel CLI and run:

```bash
npm i -g vercel
vercel login
cd /path/to/this/repo
vercel --prod
```

Troubleshooting common issues

- If deployment succeeds but your custom domain shows a Vercel 404/NOT_FOUND error, the domain is pointing at Vercel's edge network but is not assigned to this project. Fix by:
	1. In the Vercel Dashboard, open the Project → Settings → Domains and add/verify your domain.
	2. In the Dashboard's Deployments view, open the latest production deployment and use "Assign to Domain" (or run the CLI alias command below) to point the domain to that deployment.

CLI alias command (replace placeholders):

```bash
vercel alias set <your-deployment-url>.vercel.app yourdomain.com
```

- DNS checks (run these locally to inspect DNS state; replace `yourdomain.com`):

```bash
dig +noall +answer yourdomain.com
dig +noall +answer www.yourdomain.com
```

Expected results:
- For `www.yourdomain.com` (subdomain) you should see a CNAME pointing to a Vercel target (something like `cname.vercel-dns.com` or a Vercel alias).
- For apex/root domains (`yourdomain.com`) follow Vercel's instructions: use A records or an ALIAS/ANAME record as shown in the Vercel Domains page.

- If using Cloudflare, disable the Cloudflare proxy (set the cloud to grey) for the Vercel records while verifying — Cloudflare's proxy can interfere with Vercel's verification and SSL issuance.

If builds fail on Vercel but succeed locally

- Ensure Vercel installs devDependencies during build (it usually does). If Vercel shows missing TypeScript or types, confirm TypeScript exists in your `devDependencies` (this repo already pins `typescript`, `@types/node`, and `@types/react`).
- Set explicit Node version in `package.json` via `engines.node` (this repo already has `"node": ">=18"`). If needed, set Project Settings -> General -> Node.js to `18.x` in the Dashboard.

If you'd like, paste the following outputs here and I will diagnose further:
- The Vercel deployment URL printed by `vercel --prod` (example: `https://project-name-abcde.vercel.app`)
- Output of the `dig` commands above for your domain
- The exact NOT_FOUND error ID you saw (you provided one earlier; I can use it to check common causes)

Notes

- The contact form opens the user's mail client using a mailto link. For server-side contact handling, add an API route and a backend mailbox integration.
