/**
 * Load a '.FNT' file for GRX.
 *
 * Please note that text rendering uses UTF8, but not all fonts provide all code points.
 * @see SetMissingCharacter()
 *
 * @class
 * @param {*} filename name of the font file.
 */
declare function Font(filename: any): void;
declare class Font {
    /**
     * Load a '.FNT' file for GRX.
     *
     * Please note that text rendering uses UTF8, but not all fonts provide all code points.
     * @see SetMissingCharacter()
     *
     * @class
     * @param {*} filename name of the font file.
     */
    constructor(filename: any);
    /**
     * Name of the FNT file.
     * @member {string}
     */
    filename: any;
    /**
     * Font height
     * @member {number}
     */
    height: number;
    /**
     * Font character ranges. An array of ranges (two entry arrays with start/end codepoints)
     * @member {number[][]}
     */
    ranges: any[];
    /**
     * Draw a left aligned string to the canvas.
     * @param {number} x x position
     * @param {number} y y position.
     * @param {string} text the string to draw.
     * @param {Color} foreground foreground color.
     * @param {Color} background background color.
     */
    DrawStringLeft(x: number, y: number, text: string, foreground: typeof Color, background: typeof Color): void;
    /**
     * Draw a center aligned string to the canvas.
     * @param {number} x x position
     * @param {number} y y position.
     * @param {string} text the string to draw.
     * @param {Color} foreground foreground color.
     * @param {Color} background background color.
     */
    DrawStringCenter(x: number, y: number, text: string, foreground: typeof Color, background: typeof Color): void;
    /**
     * Draw a right aligned string to the canvas.
     * @param {number} x x position
     * @param {number} y y position.
     * @param {string} text the string to draw.
     * @param {Color} foreground foreground color.
     * @param {Color} background background color.
     */
    DrawStringRight(x: number, y: number, text: string, foreground: typeof Color, background: typeof Color): void;
    /**
     * Calculate string width for this font.
     * @param {string} text the string to check.
     * @returns {number} the width in pixels.
     */
    StringWidth(text: string): number;
    /**
     * Calculate string height for this font.
     * @param {string} text the string to check.
     * @returns {number} the height in pixels.
     */
    StringHeight(text: string): number;
}
//# sourceMappingURL=Font.d.ts.map