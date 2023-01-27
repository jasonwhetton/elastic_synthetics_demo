import { journey, step, expect } from '@elastic/synthetics';

journey('homepage journey', ({ page, params }) => {
  step('Test step', async () => {
    await page.goto('http://ellos.se');
    const url = page.url();
    expect(url).toContain('ellos');
  });
});