import { adjustHSL, toHSLString } from './color.helper';
import colorAssociations from '../contstants/associations';

const assocB = colorAssociations.find(a => a.letter === 'B');
const assocD = colorAssociations.find(a => a.letter === 'D');

describe('Color Helper', () => {
  describe('toHSLString', () => {
    it('should format the B association correctly', () => {
      const actual = toHSLString(assocB);
      const expected = 'hsl(240, 100%, 30%)';
      expect(actual).toEqual(expected);
    });
    it('should format the D association correctly', () => {
      const actual = toHSLString(assocD);
      const expected = 'hsl(20, 100%, 30%)';
      expect(actual).toEqual(expected);
    });
  });
  describe('adjustHSL', () => {
    it('should add 10 to the lightness', () => {
      const actual = toHSLString(adjustHSL(assocB, 10));
      const expected = 'hsl(240, 100%, 40%)';
      expect(actual).toEqual(expected);
    });
    it('should subtract 10 from the lightness', () => {
      const actual = toHSLString(adjustHSL(assocB, -10));
      const expected = 'hsl(240, 100%, 20%)';
      expect(actual).toEqual(expected);
    });
  });
});
