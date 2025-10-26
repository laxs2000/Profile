#!/usr/bin/env node
/*
  Playwright script to extract public LinkedIn profile content.
  Usage:
    npm i -D playwright
    npx playwright install --with-deps
    node scripts/linkedin-extract.js https://www.linkedin.com/in/your-profile/

  Notes:
  - Run locally. Do NOT commit credentials.
  - LinkedIn may throttle or block automated access; use responsibly and respect LinkedIn's Terms of Service.
*/

const { chromium } = require('playwright');

async function extract(url) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36' });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  // Give LinkedIn a moment to render content
  await page.waitForTimeout(2000);

  const data = await page.evaluate(() => {
    const text = (sel) => {
      const el = document.querySelector(sel);
      return el ? el.innerText.trim() : '';
    };

    const multiText = (sel) => Array.from(document.querySelectorAll(sel)).map(e => e.innerText.trim()).filter(Boolean);

    // Name and headline
    const name = text('h1') || text('.text-heading-xlarge');
    const headline = text('.text-body-medium.break-words') || text('.pv-top-card--list > li') || text('.text-body-medium');

    // About / Summary
    const about = text('#about .pv-shared-text-with-see-more') || text('.pv-about__summary-text') || '';

    // Experience entries
    const expNodes = Array.from(document.querySelectorAll('#experience-section li, .pv-profile-section__card-item-v2'));
    const experiences = expNodes.map(node => {
      const title = node.querySelector('h3')?.innerText.trim() || node.querySelector('.t-14')?.innerText.trim() || '';
      const company = node.querySelector('.pv-entity__secondary-title, .pv-entity__company-summary-info')?.innerText.trim() || node.querySelector('.t-14.t-black.t-normal')?.innerText.trim() || '';
      const date = node.querySelector('.pv-entity__date-range span:nth-child(2), .pv-entity__dates')?.innerText.trim() || '';
      const bullets = Array.from(node.querySelectorAll('ul li')).map(li => li.innerText.trim());
      let location = node.querySelector('.pv-entity__location, .pv-entity__secondary-title')?.innerText.trim() || '';
      return { title, company, date, location, bullets };
    }).filter(e => e.title || e.company);

    // Education entries
    const eduNodes = Array.from(document.querySelectorAll('#education-section li, .pv-profile-section__card-item'));
    const education = eduNodes.map(node => {
      const school = node.querySelector('h3')?.innerText.trim() || node.querySelector('.pv-entity__school-name')?.innerText.trim() || '';
      const degree = node.querySelector('.pv-entity__degree-name .pv-entity__comma-item')?.innerText.trim() || node.querySelector('.pv-entity__degree-info')?.innerText.trim() || '';
      const date = node.querySelector('.pv-entity__dates')?.innerText.trim() || '';
      return { school, degree, date };
    }).filter(e => e.school);

    // Skills (visible list)
    const skills = multiText('.pv-skill-category-entity__name-text, .pv-skill-entity__skill-name');

    // Featured / Projects - simplest: collect links from featured
    const featured = Array.from(document.querySelectorAll('.pv-featured-item__link, .featured-item__content a')).map(a => ({ text: a.innerText.trim(), href: a.href }));

    return { name, headline, about, experiences, education, skills, featured };
  });

  await browser.close();
  return data;
}

(async () => {
  const url = process.argv[2];
  if (!url) {
    console.error('Usage: node scripts/linkedin-extract.js <linkedin-profile-url>');
    process.exit(1);
  }
  try {
    const out = await extract(url);
    console.log(JSON.stringify(out, null, 2));
  } catch (err) {
    console.error('Failed to extract profile:', err.message || err);
    process.exit(2);
  }
})();
