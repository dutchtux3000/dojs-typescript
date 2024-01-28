/**
 * Color definition.
 * @module 3dfx */
/**
* set a bit.
*
* @param {number} i bit to set.
* @returns {number} number with given bit set.
*/
declare function FXBIT(i: number): number;
/**
 * (re)initialize simple texture memory management for given TMU.
 *
 * @param {GR_TMU} tmu the tmu to initialize.
 */
declare function FxTexMemInit(tmu: GR_TMU): void;
/**
 * try to find the next available memory for texture.
 *
 * @param {GR_TMU} tmu the TMU where this texture shall be used.
 * @param {TexInfo} info the texture.
 *
 * @returns {number} a start address or null.
 */
declare function FxTexMemGetStartAddress(tmu: GR_TMU, info: TexInfo): number;
/**
 * create empty vertex.
 * @returns {number[]} an empty vertex.
 */
declare function FxEmptyVertex(): number[];
/**
 * split up RGB value and store in vertex.
 *
 * @param {number[]} v the vertex to store in.
 * @param {number} idx start index of RGB values.
 * @param {number} rgb the RGB value.
 */
declare function FxRGB2Vertex(v: number[], idx: number, rgb: number): void;
/** hard edge when assigning texture memory at 2MiB */
declare var TEXMEM_2MB_EDGE: number;
/** TMU memory start address/next address per TMU */
declare var _nextTexture: number[];
/** TMU memory end address per TMU */
declare var _lastTexture: number[];
//# sourceMappingURL=3dfx.d.ts.map