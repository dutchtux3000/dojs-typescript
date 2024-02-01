/**
 * Create Color() from HSB[A].
 *
 * @param {number} h the hue [0..255].
 * @param {number} s the saturation [0..255].
 * @param {number} b the brightness [0..255].
 * @param {number} a the alpha value [0..255].
 */
declare function HSBColor(h: number, s: number, b: number, a: number): number;
declare namespace EGA {
    let BLACK: number;
    let BLUE: number;
    let GREEN: number;
    let CYAN: number;
    let RED: number;
    let MAGENTA: number;
    let BROWN: number;
    let LIGHT_GRAY: number;
    let DARK_GRAY: number;
    let LIGHT_GREY: number;
    let DARK_GREY: number;
    let LIGHT_BLUE: number;
    let LIGHT_GREEN: number;
    let LIGHT_CYAN: number;
    let LIGHT_RED: number;
    let LIGHT_MAGENTA: number;
    let YELLOW: number;
    let WHITE: number;
}
/**
* @property {Color} NO_COLOR the transparent Color.
*/
declare var NO_COLOR: number;
declare namespace BLEND {
    let REPLACE: number;
    let ALPHA: number;
    let ADD: number;
    let DARKEST: number;
    let LIGHTEST: number;
    let DIFFERENCE: number;
    let EXCLUSION: number;
    let MULTIPLY: number;
    let SCREEN: number;
    let OVERLAY: number;
    let HARD_LIGHT: number;
    let DOGE: number;
    let BURN: number;
}
//# sourceMappingURL=color.d.ts.map