/**
 * Receives a color association and returns a new association object with the lightness field and color fields adjusted
 * by the percent
 *
 * @param association - Color Association Object
 * @param percent - Integer amount to adjust the lightness by
 * @returns {*}
 */
export function adjustHSL(association, percent) {
  const updated = {
    ...association,
    lightness: (association.lightness + percent > 100) ? association.lightness - percent : association.lightness + percent,
  };
  return {
    ...updated,
    color: toHSLString(updated),
  };
}

/**
 * Accepts a Color Association object and returns a color string
 *
 * @param association - Color Association Object
 * @returns {*}
 */
export function toHSLString(association) {
  return `hsl(${association.hue}, ${association.saturation}%, ${association.lightness}%)`;
}
