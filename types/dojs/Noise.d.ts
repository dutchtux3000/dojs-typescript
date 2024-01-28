/**
 * perlin noise functions
 *
 * **Note: noise module must be loaded by calling LoadLibrary("noise") before using!**
 *
 * @see LoadLibrary()
 *
 * @module noise
 */
/**
 * 1D, 2D, 3D and 4D float Perlin noise.
 *
 * @param {number} x x-coordinate in noise space
 * @param {number} [y] y-coordinate in noise space
 * @param {number} [z] z-coordinate in noise space
 * @param {number} [w] w-coordinate in noise space
 *
 * @returns {number} Perlin noise value (between 0 and 1) at specified coordinates.
 */
declare function Noise(x: number, y?: number, z?: number, w?: number): number;
/**
 * 1D, 2D, 3D and 4D float Perlin simplex noise
 *
 * @param {number} x x-coordinate in noise space
 * @param {number} [y] y-coordinate in noise space
 * @param {number} [z] z-coordinate in noise space
 * @param {number} [w] w-coordinate in noise space
 *
 * @returns {number} Perlin simplex noise value (between 0 and 1) at specified coordinates.
 */
declare function SNoise(x: number, y?: number, z?: number, w?: number): number;
//# sourceMappingURL=Noise.d.ts.map