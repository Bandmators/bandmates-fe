import { breakpoints } from '@/styles/theme';

import { maxMedia, minMedia } from '@/libs/media';

describe('Lib test', () => {
  test('generates correct media query strings', () => {
    const { mobile, tablet, desktop, desktopLarge } = breakpoints;
    expect(minMedia.mobile).toBe(`@media screen and (min-width: ${mobile})`);
    expect(minMedia.tablet).toBe(`@media screen and (min-width: ${tablet})`);
    expect(maxMedia.desktop).toBe(`@media screen and (max-width: ${desktop})`);
    expect(maxMedia.desktopLarge).toBe(`@media screen and (max-width: ${desktopLarge})`);
  });
});
