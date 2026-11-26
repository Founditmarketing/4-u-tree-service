import assert from 'node:assert/strict';
import path from 'node:path';
import { before, test } from 'node:test';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Use the same PLAYWRIGHT and CHROME_CHANNEL settings as scripts/snapshot.mjs.
const pw = process.env.PLAYWRIGHT
  ? pathToFileURL(path.join(process.env.PLAYWRIGHT, 'index.mjs')).href : 'playwright';
const { chromium } = await import(pw);
const pub = fileURLToPath(new URL('../public/', import.meta.url));
const route = '/tree-service-scottsboro-al';
const viewports = [[320, 568], [360, 640], [375, 667], [390, 844], [414, 896],
  [480, 844], [639, 844], [640, 844], [767, 900], [768, 900], [820, 900],
  [844, 390], [1024, 768], [1280, 720], [1440, 900]];
const samples = [];

function measureText() {
  function bounds(element) {
    const range = document.createRange();
    range.selectNodeContents(element);
    return range.getBoundingClientRect();
  }
  function fitsWidth(element) {
    const ink = bounds(element);
    const box = element.getBoundingClientRect();
    return ink.width > 0 && ink.left >= Math.max(0, box.left) - 1
      && ink.right <= Math.min(innerWidth, box.right) + 1;
  }
  const heading = document.querySelector('main h1');
  const hero = heading.closest('section').getBoundingClientRect();
  const copy = bounds(heading.parentElement);
  return {
    title: heading.textContent.trim(),
    headingFits: fitsWidth(heading),
    heroFits: copy.top >= hero.top - 1 && copy.bottom <= hero.bottom + 1,
    quoteFits: fitsWidth(document.querySelector('#quote h2')),
  };
}

before(async () => {
  const browser = await chromium.launch({ channel: process.env.CHROME_CHANNEL, timeout: 120_000 });
  const bodyFonts = Promise.withResolvers();
  const displayFont = Promise.withResolvers();
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    page.setDefaultTimeout(120_000);
    await page.route('http://site.test/**', request => {
      const pathname = new URL(request.request().url()).pathname;
      const file = pathname === route ? route + '/index.html' : pathname;
      return request.fulfill({ path: path.join(pub, file) });
    });
    await page.route('https://fonts.gstatic.com/**', async request => {
      const url = new URL(request.request().url());
      await (url.pathname.includes('/barlowcondensed/') ? displayFont : bodyFonts).promise;
      await request.continue();
    });
    await page.goto('http://site.test' + route, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => [...document.fonts].some(font =>
      font.family.includes('Barlow Condensed') && font.status === 'loading'));
    await page.waitForFunction(() => {
      const wrapper = document.querySelector('main h1')?.parentElement;
      return wrapper?.style.opacity === '1' && wrapper.style.transform === 'none';
    });
    for (const state of ['system fallback', 'Space Grotesk fallback', 'Barlow Condensed']) {
      if (state === 'Space Grotesk fallback') {
        bodyFonts.resolve();
        const loaded = await page.evaluate(async () =>
          (await document.fonts.load('700 20px "Space Grotesk"')).length);
        assert.ok(loaded, 'secondary font loaded');
      }
      if (state === 'Barlow Condensed') {
        displayFont.resolve();
        await page.evaluate(() => document.fonts.ready);
      }
      const active = await page.evaluate(() => document.fonts.check('italic 900 52px "Barlow Condensed"'));
      assert.equal(active, state === 'Barlow Condensed', state);
      for (const [width, height] of viewports) {
        await page.setViewportSize({ width, height });
        const sample = await page.evaluate(measureText);
        assert.equal(sample.title, 'Tree Service in Scottsboro');
        samples.push({ size: width + 'x' + height, state, ...sample });
      }
    }
  } finally {
    bodyFonts.resolve();
    displayFont.resolve();
    await browser.close();
  }
});

function assertFits(key) {
  const failures = samples.filter(sample => !sample[key]).map(sample => sample.size + ' ' + sample.state);
  assert.deepEqual(failures, []);
}

test('the complete town heading fits between the page gutters', () => assertFits('headingFits'));
test('the hero contains its label, title and introduction on short screens', () => assertFits('heroFits'));
test('the full estimate heading fits in the quote panel', () => assertFits('quoteFits'));
