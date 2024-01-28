/**
 * Create a ZBuffer. A ZBuffer must be set as current before using it.
 *
 * **Note: al3d module must be loaded by calling LoadLibrary("al3d") before using!**
 *
 * @class
 * @param {Bitmap} bitmap the bitmap to draw to or null for the screen.
 */
declare function ZBuffer(bitmap: Bitmap): void;
declare class ZBuffer {
    /**
     * Create a ZBuffer. A ZBuffer must be set as current before using it.
     *
     * **Note: al3d module must be loaded by calling LoadLibrary("al3d") before using!**
     *
     * @class
     * @param {Bitmap} bitmap the bitmap to draw to or null for the screen.
     */
    constructor(bitmap: Bitmap);
    /**
     * Clear ZBuffer with given value.
     * @param {number} z value to use for clearing.
     */
    Clear(z: number): void;
    /**
     * Set this ZBuffer as current.
     */
    Set(): void;
}
//# sourceMappingURL=ZBuffer.d.ts.map